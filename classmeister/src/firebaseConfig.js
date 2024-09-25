// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkSX2amCZXq0DH2Z1CEdnn-fGeF9KzzUk",
    authDomain: "the-class-meister.firebaseapp.com",
    databaseURL: "https://the-class-meister-default-rtdb.firebaseio.com",
    projectId: "the-class-meister",
    storageBucket: "the-class-meister.appspot.com",
    messagingSenderId: "215169913206",
    appId: "1:215169913206:web:5cfd874f1c2e3e3d97ea57",
    measurementId: "G-7RFP16DSPZ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

// // firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const db = getFirestore(app);

// export { auth, provider, db };
