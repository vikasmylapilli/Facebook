// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAB9ANuQiGvoE6flOIIQho2YThvZrUxl1g",
    authDomain: "facebook-clone-206c8.firebaseapp.com",
    projectId: "facebook-clone-206c8",
    storageBucket: "facebook-clone-206c8.appspot.com",
    messagingSenderId: "405640533114",
    appId: "1:405640533114:web:1d4bf2d4dd09c67834d7c3",
    measurementId: "G-T21EVV0FN7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db