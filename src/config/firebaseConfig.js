// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfD12ELulKer4PF31Z7JrpoHkUylxhKew",
    authDomain: "tienda-av-arg.firebaseapp.com",
    projectId: "tienda-av-arg",
    storageBucket: "tienda-av-arg.firebasestorage.app",
    messagingSenderId: "310782953469",
    appId: "1:310782953469:web:07c6c82f4118205d2cbb94"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 