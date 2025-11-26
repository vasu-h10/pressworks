// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCq756gSjgNT9V5WeCmEB6lqFwnRlIxLA",
  authDomain: "pressworks-8e0b1.firebaseapp.com",
  projectId: "pressworks-8e0b1",
  storageBucket: "pressworks-8e0b1.appspot.com",
  messagingSenderId: "91132597314",
  appId: "1:91132597314:web:80f91cac95601e4e1389db",
  measurementId: "G-DWSF2C04ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage };
