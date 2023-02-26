// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGDZSMUFOQVat7rHe1xN8XdVOWCEapGaM",
  authDomain: "meg-smart-bedsheet.firebaseapp.com",
  projectId: "meg-smart-bedsheet",
  storageBucket: "meg-smart-bedsheet.appspot.com",
  messagingSenderId: "332675275566",
  appId: "1:332675275566:web:fde9b8cb4dcbf6bc6c78bf",
  measurementId: "G-PW00QZHKP3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
