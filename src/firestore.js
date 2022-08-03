// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-SI7Gfuynj7XCKKZPM1JYmwUZYPC5C50",
    authDomain: "eshop-firestore-10ad9.firebaseapp.com",
    projectId: "eshop-firestore-10ad9",
    storageBucket: "eshop-firestore-10ad9.appspot.com",
    messagingSenderId: "596469103692",
    appId: "1:596469103692:web:c4daa096b542811b2b48e9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();
