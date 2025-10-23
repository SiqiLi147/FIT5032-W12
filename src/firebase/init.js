// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATeROs0R0JZl8iL9ZpDpepJLLt4Izp_Ts",
  authDomain: "lab-activity-w7.firebaseapp.com",
  projectId: "lab-activity-w7",
  storageBucket: "lab-activity-w7.firebasestorage.app",
  messagingSenderId: "515776530227",
  appId: "1:515776530227:web:3c747c09e3c35182302046"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;