import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyBNd3ApUmHm_F4NXUQAfufqFocxo9OrOoM",
  authDomain: "crwn-clothing-92ead.firebaseapp.com",
  databaseURL: "https://crwn-clothing-92ead.firebaseio.com",
  projectId: "crwn-clothing-92ead",
  storageBucket: "crwn-clothing-92ead.appspot.com",
  messagingSenderId: "727169374745",
  appId: "1:727169374745:web:c8551a3a969201cc4c6888",
  measurementId: "G-X57HQ5DTPR",
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({promet : `select_account`});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;