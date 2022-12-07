// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzdYzfRTAdNBAZP7irp5gPJbwbwqBltQI",
    authDomain: "db-queuing-system.firebaseapp.com",
    projectId: "db-queuing-system",
    storageBucket: "db-queuing-system.appspot.com",
    messagingSenderId: "740592090373",
    appId: "1:740592090373:web:cd398120e8b4763628cb6c",
    databaseURL:
        "https://db-queuing-system-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const auth = getAuth(app);
