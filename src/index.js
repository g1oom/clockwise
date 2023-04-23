import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeAuth, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPtXjocTf0p45AJmVv-HVuW8ap9W5li-M",
  authDomain: "clockwise-b4b26.firebaseapp.com",
  projectId: "clockwise-b4b26",
  storageBucket: "clockwise-b4b26.appspot.com",
  messagingSenderId: "537356577294",
  appId: "1:537356577294:web:be109758f24d9569b26a5f",
  measurementId: "G-9V4BMV59XX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log("logged in")
    // setCurrentUser(user);
  } else {
    console.log("no user")
    // setCurrentUser(null);
  }
}, (error) => {
  console.error('Error during authentication state change: ', error);
});


// Authentication of Users 
// Location/Time/Class
// List of students and status 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
