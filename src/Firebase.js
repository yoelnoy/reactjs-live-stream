import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrANpRvO2CHYoIphIidkp0QmY_M0n0xrQ",
  authDomain: "live-stream-app-52dba.firebaseapp.com",
  projectId: "live-stream-app-52dba",
  storageBucket: "live-stream-app-52dba.appspot.com",
  messagingSenderId: "570495837019",
  appId: "1:570495837019:web:8440b8350a58b7bb59f07e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;