import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    // API key needs to be prefixed with NEXT_PUBLIC to expose to browser.
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "next-firebase-auth-2e069.firebaseapp.com",
    projectId: "next-firebase-auth-2e069",
    storageBucket: "next-firebase-auth-2e069.appspot.com",
    messagingSenderId: "140518011141",
    appId: "1:140518011141:web:780b0a94ee3232c39e476c",
    measurementId: "G-QM0XB991CF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);