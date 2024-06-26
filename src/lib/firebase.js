// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdksZj2TPFXFYwgxDloZVrL1gBmtDpC1c",
  authDomain: "mince-auth-9e47d.firebaseapp.com",
  projectId: "mince-auth-9e47d",
  storageBucket: "mince-auth-9e47d.appspot.com",
  messagingSenderId: "574420052964",
  appId: "1:574420052964:web:a829eea15d893833be75f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();
export default app;