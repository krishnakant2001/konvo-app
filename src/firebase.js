import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-application-ad4f0.firebaseapp.com",
  projectId: "chat-application-ad4f0",
  storageBucket: "chat-application-ad4f0.appspot.com",
  messagingSenderId: "862297466444",
  appId: "1:862297466444:web:c53cac5dc81373d3a7f6e9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
