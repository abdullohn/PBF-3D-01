import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyBaLFljts3ODiCLpTtrB9pRa9MiludHeYo",
    authDomain: "belajar-react-9eceb.firebaseapp.com",
    databaseURL: "https://belajar-react-9eceb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "belajar-react-9eceb",
    storageBucket: "belajar-react-9eceb.appspot.com",
    messagingSenderId: "278089381268",
    appId: "1:278089381268:web:c157e52ff5309c8e158b81",
    measurementId: "G-LYFFJ07T11"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();