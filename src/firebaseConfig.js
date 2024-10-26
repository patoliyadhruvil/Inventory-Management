// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr2geVlIqE80sEXlz4bW3jD1KBZGIqomM",
  authDomain: "product-6613b.firebaseapp.com",
  projectId: "product-6613b",
  storageBucket: "product-6613b.appspot.com",
  messagingSenderId: "1085620150549",
  appId: "1:1085620150549:web:7895e9873314b1381bc91c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
