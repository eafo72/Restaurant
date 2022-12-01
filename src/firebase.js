// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3mR3xzBj6jgyVrAg8sacAOAOGJiqcw90",
  authDomain: "ucamp-5ee6c.firebaseapp.com",
  projectId: "ucamp-5ee6c",
  storageBucket: "ucamp-5ee6c.appspot.com",
  messagingSenderId: "492115732842",
  appId: "1:492115732842:web:df3794a5a1fe913819dd13"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();