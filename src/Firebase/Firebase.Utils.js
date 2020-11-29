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

export const  createUserProfileDocument = async (userAuth , additionalData) => {
  if(!userAuth ) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    // console.log("snapShot",snapShot)
    // console.log("additionalData",additionalData)

    if(!snapShot.exists) {
      const {displayName , email} = userAuth;
      const createdAt = new Date();

      // console.log("displayName fire userAuth",userAuth)
      try{
        // console.log("displayName fire",displayName)
        await userRef.set({
          displayName ,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log("error creating user" , error.message)
      }
    }

    return userRef;

  }




export const auth = firebase.auth();
export const firestore = firebase.firestore() //database

const provider = new firebase.auth.GoogleAuthProvider(); 

provider.setCustomParameters({promet : `select_account`});


export const SignInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;