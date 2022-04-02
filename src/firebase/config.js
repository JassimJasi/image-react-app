import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCwhn6g3KbElndIhmAF912nutpoFCD3Erw",
    authDomain: "react-image-gallery-43874.firebaseapp.com",
    projectId: "react-image-gallery-43874",
    storageBucket: "react-image-gallery-43874.appspot.com",
    messagingSenderId: "181888478912",
    appId: "1:181888478912:web:25d5a24ae1b5464822c725"
  }

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };