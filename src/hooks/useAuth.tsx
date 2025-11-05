import { createContext, useContext, useEffect, useState } from "react";
import { 
  User, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface AuthContextType {
  user: User | null;
  userType: "student" | "coordinator" | null;
  loading: boolean;
  signUp: (email: string, password: string, userData: any, type: "student" | "coordinator") => Promise<void>;
  signIn: (email: string, password: string, type: "student" | "coordinator") => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<"student" | "coordinator" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Get user type from Firestore
        const studentDoc = await getDoc(doc(db, "students", user.uid));
        if (studentDoc.exists()) {
          setUserType("student");
        } else {
          const coordinatorDoc = await getDoc(doc(db, "coordinators", user.uid));
          if (coordinatorDoc.exists()) {
            setUserType("coordinator");
          }
        }
      } else {
        setUserType(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string, userData: any, type: "student" | "coordinator") => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Store user data in Firestore
    const collection = type === "student" ? "students" : "coordinators";
    await setDoc(doc(db, collection, user.uid), {
      ...userData,
      email,
      createdAt: new Date().toISOString(),
    });
    
    setUserType(type);
  };

  const signIn = async (email: string, password: string, type: "student" | "coordinator") => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Verify user type
    const collection = type === "student" ? "students" : "coordinators";
    const userDoc = await getDoc(doc(db, collection, user.uid));
    
    if (!userDoc.exists()) {
      await signOut(auth);
      throw new Error(`No ${type} account found with this email`);
    }
    
    setUserType(type);
  };

  const logout = async () => {
    await signOut(auth);
    setUserType(null);
  };

  const value = {
    user,
    userType,
    loading,
    signUp,
    signIn,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
