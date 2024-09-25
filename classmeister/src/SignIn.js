// SignIn.js
import React from 'react';
import { auth, provider } from './firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in:", result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <button onClick={handleSignIn}>
      Sign in with Google
    </button>
  );
};

export default SignIn;

// import React from 'react';
// import { auth } from './firebase';
// import firebase from 'firebase/app';

// const SignIn = () => {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };

//   return (
//     <div>
//       <button onClick={signInWithGoogle}>Sign in with Google</button>
//     </div>
//   );
// };

// export default SignIn;
