// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWLYm3fDaPFiEr8bSOmrZQTSw017uvqhM",
  authDomain: "wildverse-3a96c.firebaseapp.com",
  projectId: "wildverse-3a96c",
  storageBucket: "wildverse-3a96c.appspot.com",
  messagingSenderId: "500634888977",
  appId: "1:500634888977:web:4536d004865efa8d49fab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;