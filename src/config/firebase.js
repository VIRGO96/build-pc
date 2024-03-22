import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD3GC2GNuW36i21TP9Y-y4hUYqkI4sI3h4",
    authDomain: "gamingxbuilder.firebaseapp.com",
    databaseURL:
        "https://gamingxbuilder-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gamingxbuilder",
    storageBucket: "gamingxbuilder.appspot.com",
    messagingSenderId: "99908734491",
    appId: "1:99908734491:web:2e0fb160ffb30e9ef532be",
    measurementId: "G-NB7G7W2G2W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, createUserWithEmailAndPassword };
