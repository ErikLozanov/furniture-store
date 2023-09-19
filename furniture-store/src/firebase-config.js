import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADJVWto2Q5e-J98tUlp0JJPFKzwzxH3xg",
  authDomain: "furniture-store-8f82a.firebaseapp.com",
  databaseURL: "https://furniture-store-8f82a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "furniture-store-8f82a",
  storageBucket: "furniture-store-8f82a.appspot.com",
  messagingSenderId: "1003373665818",
  appId: "1:1003373665818:web:c811506ab646afc6da7ba3"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
  export const db = getDatabase();

  export const auth = getAuth(app);