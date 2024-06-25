// Cookat2/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbe8QaOwGfD_Tk1prPMSg5UVI9thUk6Xo",
  authDomain: "cookat-f885c.firebaseapp.com",
  projectId: "cookat-f885c",
  storageBucket: "cookat-f885c.appspot.com",
  messagingSenderId: "833463506953",
  appId: "1:833463506953:web:9a4d5461b9ac2b0acd00d8",
  measurementId: "G-8X4X4HWRM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
