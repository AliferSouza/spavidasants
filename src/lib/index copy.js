// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, getDocs, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAESk3zac9ET4F2Fiah5g09EwK0U4rPTAo",
  authDomain: "spavidasants-47385.firebaseapp.com",
  projectId: "spavidasants-47385",
  storageBucket: "spavidasants-47385.appspot.com",
  messagingSenderId: "867885111350",
  appId: "1:867885111350:web:84310a1714023101266097",
  measurementId: "G-SR1DSF55PB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {  
  db,
  getFirestore,
  addDoc, 
  collection,
  getDocs
};


