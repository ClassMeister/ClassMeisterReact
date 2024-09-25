// ClockOutIn.js (for Students)
import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ClockOutIn = ({ studentId, courseId }) => {
  const [isClockedOut, setIsClockedOut] = useState(false);

  const handleClockOut = async () => {
    try {
      await addDoc(collection(db, "passes"), {
        studentId,
        courseId,
        clockOutTime: Timestamp.now(),
        isClockedOut: true,
      });
      setIsClockedOut(true);
    } catch (error) {
      console.error("Error clocking out:", error);
    }
  };

  const handleClockIn = async () => {
    try {
      await addDoc(collection(db, "passes"), {
        studentId,
        courseId,
        clockInTime: Timestamp.now(),
        isClockedOut: false,
      });
      setIsClockedOut(false);
    } catch (error) {
      console.error("Error clocking in:", error);
    }
  };

  return (
    <div>
      {isClockedOut ? (
        <button onClick={handleClockIn}>Clock In</button>
      ) : (
        <button onClick={handleClockOut}>Clock Out</button>
      )}
    </div>
  );
};

export default ClockOutIn;

// import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/database';

// function StudentInterface() {
//   // Add components for student clock in/out functionality here

//   return (
//     <div>
//       <h2>Student Interface</h2>
//       {/* Add clock in/out buttons and other student-related features */}
//     </div>
//   );
// }

// export default StudentInterface;