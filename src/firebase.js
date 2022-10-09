import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from "firebase/auth"

import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyC89R1c6ZVyShhB4VENT_vkmj4SicKPgko",
    authDomain: "auth-development-353f3.firebaseapp.com",
    projectId: "auth-development-353f3",
    storageBucket: "auth-development-353f3.appspot.com",
    messagingSenderId: "616991032835",
    appId: "1:616991032835:web:1e5b09912829436c7bf036"
  })

export default app

export const auth = getAuth(app)