import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDakZ5DedsPsEW_QaiOT2TnGT9p_oUeO20",
  authDomain: "akshay-dsa.firebaseapp.com",
  projectId: "akshay-dsa",
  storageBucket: "akshay-dsa.firebasestorage.app",
  messagingSenderId: "245821795139",
  appId: "1:245821795139:web:ba99e1a8e664311172ddf6",
  measurementId: "G-0BYDSWGWSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
