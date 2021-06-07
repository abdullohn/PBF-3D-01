import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyD27npQs6xJVzhLlzWwNmKa3mZk9g1KMtw",
    authDomain: "belajar-react---mayang.firebaseapp.com",
    databaseURL: "https://belajar-react---mayang-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "belajar-react---mayang",
    storageBucket: "belajar-react---mayang.appspot.com",
    messagingSenderId: "754473285652",
    appId: "1:754473285652:web:1a919ec52badec1cefcf01",
    measurementId: "G-VSBLNSSLS9"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();