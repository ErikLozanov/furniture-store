import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyADJVWto2Q5e-J98tUlp0JJPFKzwzxH3xg",
    authDomain: "furniture-store-8f82a.firebaseapp.com",
    projectId: "furniture-store-8f82a",
    storageBucket: "furniture-store-8f82a.appspot.com",
    messagingSenderId: "1003373665818",
    appId: "1:1003373665818:web:c811506ab646afc6da7ba3"
  };


  const app = initializeApp(firebaseConfig);
  export const db = getDatabase();

  export const auth = getAuth(app);