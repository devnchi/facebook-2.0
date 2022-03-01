import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxJNQwhUEi3Ulrv5BPXeT-kxHNLK6HMCU",
    authDomain: "facebook-2ffae.firebaseapp.com",
    projectId: "facebook-2ffae",
    storageBucket: "facebook-2ffae.appspot.com",
    messagingSenderId: "745974452354",
    appId: "1:745974452354:web:274f3073f6a7e85984249b",
    measurementId: "G-BCEB5VE633"
  };
  
  // Initialize Firebase
  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  const storage = getStorage();
  const storageRef = ref(storage);

export { app, db, storage, storageRef };