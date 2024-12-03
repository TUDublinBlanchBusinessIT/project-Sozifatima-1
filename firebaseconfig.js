import { initializeApp } from 'firebase/app'; 
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyA-oEGjsTDhe0pnAwGHz31brcgYJ38HiB0",
    database: "https://fastfoodcompare-a7107.firebaseapp.com",
    authDomain: "fastfoodcompare-a7107.firebaseapp.com",
    projectId: "fastfoodcompare-a7107",
    storageBucket: "fastfoodcompare-a7107.firebasestorage.app",
    messagingSenderId: "102981255043",
    appId: "1:102981255043:web:336663d48118279d7f80b6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Authentication
const db = getFirestore(app); // Firestore Database

export { auth, db };


