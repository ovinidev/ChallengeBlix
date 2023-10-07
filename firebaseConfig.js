import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAjbun6sqDrXnLKIdcMGDhc_GF1qh5a0I",
  authDomain: "challenge-blix-rn.firebaseapp.com",
  projectId: "challenge-blix-rn",
  storageBucket: "challenge-blix-rn.appspot.com",
  messagingSenderId: "453571279323",
  appId: "1:453571279323:web:4d8c31ffe81f98481e0ffe",
  measurementId: "G-SJ14D3F6BG",
};

export const firebase = initializeApp(firebaseConfig);
export const database = getFirestore(firebase);
