// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCKHa6JGzxHEUoyd9OfoF5EOxhQSJWR1A",
  authDomain: "cricket-auction-60461.firebaseapp.com",
  projectId: "cricket-auction-60461",
  storageBucket: "cricket-auction-60461.appspot.com",
  messagingSenderId: "465980317699",
  appId: "1:465980317699:web:6602489bc932767bd06e36",
  measurementId: "G-KDHXRDXCJS",
};
// Initialize Cloud Firestore and get a reference to the service
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase

// const analytics = getAnalytics(app);

export { db };
