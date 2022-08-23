// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgj7tVlb41_guCxEdAQyNQG-g_kuVFOuo',
  authDomain: 'todoapp-fa88d.firebaseapp.com',
  projectId: 'todoapp-fa88d',
  storageBucket: 'todoapp-fa88d.appspot.com',
  messagingSenderId: '42650136153',
  appId: '1:42650136153:web:d2c8ac23c37fd0018e0b48',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
