import firebase from "firebase";

const firebaseConfig = {
    apiKey: "APIKEY",
    authDomain: "AUTH",
    databaseURL: "URL",
    projectId: "ID",
    storageBucket: "STORAGE",
    messagingSenderId: "MESSAGE-ID",
    appId: "APP-ID",
    measurementId: "ID"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;    