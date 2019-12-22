import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDkgv-EHpXRz10HTUOyJL8D0QMgXE6DZ7k",
    authDomain: "clothing-db-5a69a.firebaseapp.com",
    databaseURL: "https://clothing-db-5a69a.firebaseio.com",
    projectId: "clothing-db-5a69a",
    storageBucket: "clothing-db-5a69a.appspot.com",
    messagingSenderId: "783987080928",
    appId: "1:783987080928:web:b6d21a01985c6fcf3bda85",
    measurementId: "G-3ZM4S318GF"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;