import firebase from "firebase/app";
import "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyAw62zSuxV0USDsONDQ5uqaPmqemLPUFrg",
    authDomain: "react-project-f35e5.firebaseapp.com",
    projectId: "react-project-f35e5",
    storageBucket: "react-project-f35e5.appspot.com",
    messagingSenderId: "367866958787",
    appId: "1:367866958787:web:e932dea8d8c4b535806376",
    measurementId: "G-P4C58HTTW4"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);