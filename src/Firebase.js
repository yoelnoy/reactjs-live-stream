import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDa_irP05uMA06OMRuY22FmrH6vP3ze66s",
  authDomain: "netflix-clone-a3418.firebaseapp.com",
  projectId: "netflix-clone-a3418",
  storageBucket: "netflix-clone-a3418.appspot.com",
  messagingSenderId: "727431916125",
  appId: "1:727431916125:web:a89c60ceb840e9ff5c7bb4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;