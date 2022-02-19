import { initializeApp }  from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArUguUqFcczTBtS7MrtRvjBxcaHxJ94WA",
    authDomain: "clone-6109c.firebaseapp.com",
    projectId: "clone-6109c",
    storageBucket: "clone-6109c.appspot.com",
    messagingSenderId: "283678830112",
    appId: "1:283678830112:web:925379cc031b653906d645"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth();

  export {auth}