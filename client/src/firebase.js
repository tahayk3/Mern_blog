// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e787e.firebaseapp.com",
  projectId: "mern-blog-e787e",
  storageBucket: "mern-blog-e787e.appspot.com",
  messagingSenderId: "157275571788",
  appId: "1:157275571788:web:5e6b953871c8851be1d6e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);