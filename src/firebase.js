// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAIdI5ZzOg_dhSDW3wGst4VxLIcHqY6Jw",
  authDomain: "web-kelas-4b40d.firebaseapp.com",
  projectId: "web-kelas-4b40d",
  storageBucket: "web-kelas-4b40d.appspot.com",
  messagingSenderId: "541752550494",
  appId: "1:541752550494:web:aadc355962767e6f09c0cf",
  measurementId: "G-1NY0N3WGRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();