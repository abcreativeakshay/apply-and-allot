import { createContext, useContext, useEffect, useState } from "react";

interface User {
  uid: string;
  email: string;
}

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

// Local storage keys
const STORAGE_KEYS = {
  CURRENT_USER: 'current_user',
  USER_TYPE: 'user_type',
  STUDENTS: 'students',
  COORDINATORS: 'coordinators',
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<"student" | "coordinator" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user from local storage on mount
    const storedUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    const storedUserType = localStorage.getItem(STORAGE_KEYS.USER_TYPE);
    
    if (storedUser && storedUserType) {
      setUser(JSON.parse(storedUser));
      setUserType(storedUserType as "student" | "coordinator");
    }
    setLoading(false);
  }, []);

  const signUp = async (email: string, password: string, userData: any, type: "student" | "coordinator") => {
    const storageKey = type === "student" ? STORAGE_KEYS.STUDENTS : STORAGE_KEYS.COORDINATORS;
    const users = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    // Check if user already exists
    if (users.some((u: any) => u.email === email)) {
      throw new Error('User with this email already exists');
    }
    
    // Create new user
    const newUser = {
      uid: Math.random().toString(36).substr(2, 9),
      email,
      password, // In production, this should be hashed
      ...userData,
      createdAt: new Date().toISOString(),
    };
    
    users.push(newUser);
    localStorage.setItem(storageKey, JSON.stringify(users));
    
    // Set current user
    const currentUser = { uid: newUser.uid, email: newUser.email };
    setUser(currentUser);
    setUserType(type);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(currentUser));
    localStorage.setItem(STORAGE_KEYS.USER_TYPE, type);
  };

  const signIn = async (email: string, password: string, type: "student" | "coordinator") => {
    const storageKey = type === "student" ? STORAGE_KEYS.STUDENTS : STORAGE_KEYS.COORDINATORS;
    const users = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error(`Invalid email or password. Please check your credentials or register as a ${type} first.`);
    }
    
    // Set current user
    const currentUser = { uid: foundUser.uid, email: foundUser.email };
    setUser(currentUser);
    setUserType(type);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(currentUser));
    localStorage.setItem(STORAGE_KEYS.USER_TYPE, type);
  };

  const logout = async () => {
    setUser(null);
    setUserType(null);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    localStorage.removeItem(STORAGE_KEYS.USER_TYPE);
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
