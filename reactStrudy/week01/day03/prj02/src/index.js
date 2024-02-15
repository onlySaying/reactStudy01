import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from 'firebase/app';;
const root = ReactDOM.createRoot(document.getElementById("root"));

const firebaseConfig = {
  apiKey: "AIzaSyAWvzBbGyOghy15PWcd-DjadVMPh85T3eM",
  authDomain: "todolist-d0238.firebaseapp.com",
  databaseURL: "https://todolist-d0238-default-rtdb.firebaseio.com",
  projectId: "todolist-d0238",
  storageBucket: "todolist-d0238.appspot.com",
  messagingSenderId: "352087103396",
  appId: "1:352087103396:web:8f03ea78bcca7743f81331",
  measurementId: "G-ECB2M9VNHF"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);