// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNjR_RciBORctP6blYbrSvtf-tQiCvETU",
  authDomain: "snappark-7e828.firebaseapp.com",
  projectId: "snappark-7e828",
  storageBucket: "snappark-7e828.appspot.com",
  messagingSenderId: "1072427721522",
  appId: "1:1072427721522:web:4794735ed1a7d7e4ff6d2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


