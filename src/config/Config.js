import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCn0iq36Uj1YppostCO974BXG0R2INbSLc",
    authDomain: "ecommerce-529bb.firebaseapp.com",
    projectId: "ecommerce-529bb",
    storageBucket: "ecommerce-529bb.appspot.com",
    messagingSenderId: "608018864068",
    appId: "1:608018864068:web:9fb849bb076cd5edc93691",
    measurementId: "G-JKV9X5BL08"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage};