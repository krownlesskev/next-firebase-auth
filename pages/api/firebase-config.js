import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import 'dotenv/config';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "next-firebase-auth-2e069.firebaseapp.com",
    projectId: "next-firebase-auth-2e069",
    storageBucket: "next-firebase-auth-2e069.appspot.com",
    messagingSenderId: "140518011141",
    appId: "1:140518011141:web:780b0a94ee3232c39e476c",
    measurementId: "G-QM0XB991CF"
};

const app = initializeApp(firebaseConfig);

// We need to access this from othe parts of our app
export const auth = getAuth(app);