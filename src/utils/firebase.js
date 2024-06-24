// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnL2QAgpPL6BPVQP4p8o-4WditoXtlzVo",
  authDomain: "netflixgpt16.firebaseapp.com",
  projectId: "netflixgpt16",
  storageBucket: "netflixgpt16.appspot.com",
  messagingSenderId: "1045983433462",
  appId: "1:1045983433462:web:91a694ffe56bca8ba152d7",
  measurementId: "G-6Q0KH82L10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
