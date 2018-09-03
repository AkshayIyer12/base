
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

// firebase-app - The core firebase client (required).
// firebase-auth - Firebase Authentication (optional).
// firebase-database - The Firebase Realtime Database (optional).
// firebase-firestore - Cloud Firestore (optional).
// firebase-storage - Firebase Storage (optional).
// firebase-messaging - Firebase Cloud Messaging (optional).
// firebase-functions - Firebase Cloud Functions (optional).


// dev
var config = {
  apiKey: "AIzaSyCYwG84yDib37kIFq1XoWe2C0U9Syg3HQk",
  authDomain: "dev-citizen-links.firebaseapp.com",
  databaseURL: "https://dev-citizen-links.firebaseio.com",
  projectId: "dev-citizen-links",
  storageBucket: "",
  messagingSenderId: "450974648894"
};

// production

firebase.initializeApp(config);

export const storage = firebase.storage();
// eslint-disable-next-line
export let db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

firebase
  .firestore()
  .enablePersistence()
  // eslint-disable-next-line
  .then(() =>
    // eslint-disable-next-line
    db = firebase.firestore()
  )
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err.code, err);
    return firebase.firestore();
  });


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
