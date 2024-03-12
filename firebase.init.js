// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbfPlZSCWqRRceNy7WKelRyzfmPwuR2To",
    authDomain: "exclusive-carport.firebaseapp.com",
    projectId: "exclusive-carport",
    storageBucket: "exclusive-carport.appspot.com",
    messagingSenderId: "667086410366",
    appId: "1:667086410366:web:8c0e248306e489ad57be2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 