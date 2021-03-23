import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyA6-S3TFperKszLmLzLmM5p490HII3hX2g",
  authDomain: "utilisateurs-ex4-4f99d.firebaseapp.com",
  projectId: "utilisateurs-ex4-4f99d",
  storageBucket: "utilisateurs-ex4-4f99d.appspot.com",
  messagingSenderId: "394436399062",
  appId: "1:394436399062:web:0efd156de73cb1bea4de77",
  measurementId: "G-GF3XS8L1RW"
  
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
