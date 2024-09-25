


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// // firebase.initializeApp(firebaseConfig);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDkSX2amCZXq0DH2Z1CEdnn-fGeF9KzzUk",
//   authDomain: "the-class-meister.firebaseapp.com",
//   databaseURL: "https://the-class-meister-default-rtdb.firebaseio.com",
//   projectId: "the-class-meister",
//   storageBucket: "the-class-meister.appspot.com",
//   messagingSenderId: "215169913206",
//   appId: "1:215169913206:web:5cfd874f1c2e3e3d97ea57",
//   measurementId: "G-7RFP16DSPZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);