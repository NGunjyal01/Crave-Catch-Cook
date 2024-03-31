// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKK6qzKdfX4SUzB27fZrfQXxeuW_3Z-RU",
  authDomain: "crave-catch-cook-c2edb.firebaseapp.com",
  projectId: "crave-catch-cook-c2edb",
  storageBucket: "crave-catch-cook-c2edb.appspot.com",
  messagingSenderId: "764146938173",
  appId: "1:764146938173:web:f8cb951b2898a01d839554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();