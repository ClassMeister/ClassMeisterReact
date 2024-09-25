import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


// import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// function App() {
//   const [authUser, setAuthUser] = useState(null);

//   firebase.auth().onAuthStateChanged((user) => {
//     setAuthUser(user);
//   });

//   return (
//     <div>
//       {authUser ? (
//         <div>
//           <h1>Welcome, {authUser.displayName}!</h1>
//           {/* Add components for teacher's dashboard and student interface here */}
//         </div>
//       ) : (
//         <button onClick={() => firebase.auth().signInAnonymously()}>
//           Sign In Anonymously
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
