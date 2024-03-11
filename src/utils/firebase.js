// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC8YOj-BwwpifN-4bNtXzGhIdpYPt5MBE",
  authDomain: "netflixgpt-c40db.firebaseapp.com",
  projectId: "netflixgpt-c40db",
  storageBucket: "netflixgpt-c40db.appspot.com",
  messagingSenderId: "863444039337",
  appId: "1:863444039337:web:32b5aa77a1080f06361bb8",
  measurementId: "G-SB6CZ7FFT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);