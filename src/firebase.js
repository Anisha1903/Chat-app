import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzaE9-fHT8TDS4stBM60ARAhrRkW2BzX4",
  authDomain: "chat-application-cd692.firebaseapp.com",
  projectId: "chat-application-cd692",
  storageBucket: "chat-application-cd692.appspot.com",
  messagingSenderId: "645085766846",
  appId: "1:645085766846:web:54a0067f1c5240664daaef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();