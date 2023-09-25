// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdUdYZLtlVqAq9iJIRATvlSJhYCAbqPto",
  authDomain: "bytechat-c351c.firebaseapp.com",
  projectId: "bytechat-c351c",
  storageBucket: "bytechat-c351c.appspot.com",
  messagingSenderId: "405094701943",
  appId: "1:405094701943:web:a3e4ea63f7d5d69f845f72",
  measurementId: "G-FGQYSMZ3ZS"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
const analytics = getAnalytics(app);