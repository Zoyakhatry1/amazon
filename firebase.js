// import { initializeApp,getApp,getApps }  from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyArUguUqFcczTBtS7MrtRvjBxcaHxJ94WA",
    authDomain: "clone-6109c.firebaseapp.com",
    projectId: "clone-6109c",
    storageBucket: "clone-6109c.appspot.com",
    messagingSenderId: "283678830112",
    appId: "1:283678830112:web:925379cc031b653906d645"
  };

  // const firebaseApp = !getApps().length?initializeApp(firebaseConfig):getApp();
  // const db = getFirestore(firebaseApp);
  // const auth = getAuth();

  // export {auth}
  // export default db;

  const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();

  const db = app.firestore();

  export default db;