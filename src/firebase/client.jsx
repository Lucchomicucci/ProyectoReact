import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAWFf8Ctt6ZjqIKzsUwpcswliGyunwc5M0",
    authDomain: "reactjscoder-27045.firebaseapp.com",
    projectId: "reactjscoder-27045",
    storageBucket: "reactjscoder-27045.appspot.com",
    messagingSenderId: "205503195032",
    appId: "1:205503195032:web:1cac59d0cfc0d3725aeded"
});

export const getFirebase = () => {
    return firebaseConfig
}

export const getFirestore = () =>{
    return firebase.firestore(firebaseConfig);
}