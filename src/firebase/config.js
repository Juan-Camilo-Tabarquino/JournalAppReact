// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK8SVNku-BWfNpr_gXYCuk_A9yoUDDYdY",
  authDomain: "journalapp-6ea2b.firebaseapp.com",
  projectId: "journalapp-6ea2b",
  storageBucket: "journalapp-6ea2b.appspot.com",
  messagingSenderId: "656628037085",
  appId: "1:656628037085:web:3e76fbc08383b0f5e1b234"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )

