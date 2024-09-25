// Dashboard.js (for Teachers)
import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [allowance, setAllowance] = useState(10); // 10 minutes default

  useEffect(() => {
    // Fetch courses from Firestore
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      setCourses(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchCourses();
  }, []);

  const addCourse = async () => {
    try {
      await addDoc(collection(db, "courses"), { courseName, allowance });
      setCourseName("");
      setAllowance(10); // reset form
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const editCourse = async (id, newName) => {
    try {
      const courseRef = collection(db, "courses").doc(id);
      await updateDoc(courseRef, { courseName: newName });
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      const courseRef = collection(db, "courses").doc(id);
      await deleteDoc(courseRef);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div>
      <h1>Manage Courses</h1>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Course Name"
      />
      <input
        type="number"
        value={allowance}
        onChange={(e) => setAllowance(e.target.value)}
        placeholder="Time Allowance (minutes)"
      />
      <button onClick={addCourse}>Add Course</button>

      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.courseName} ({course.allowance} mins)
            <button onClick={() => editCourse(course.id, prompt("New name:", course.courseName))}>
              Edit
            </button>
            <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import { firestore } from './firebase';

// const Dashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [newCourse, setNewCourse] = useState('');

//   useEffect(() => {
//     const unsubscribe = firestore.collection('courses').onSnapshot(snapshot => {
//       const coursesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setCourses(coursesData);
//     });
//     return unsubscribe;
//   }, []);

//   const addCourse = () => {
//     firestore.collection('courses').add({ name: newCourse, timeoutAllowance: 0 });
//     setNewCourse('');
//   };

//   const deleteCourse = (id) => {
//     firestore.collection('courses').doc(id).delete();
//   };

//   const updateCourse = (id, name) => {
//     firestore.collection('courses').doc(id).update({ name });
//   };

//   return (
//     <div>
//       <h1>Teacher Dashboard</h1>
//       <input
//         value={newCourse}
//         onChange={(e) => setNewCourse(e.target.value)}
//         placeholder="New Course Name"
//       />
//       <button onClick={addCourse}>Add Course</button>
//       <ul>
//         {courses.map(course => (
//           <li key={course.id}>
//             <input
//               value={course.name}
//               onChange={(e) => updateCourse(course.id, e.target.value)}
//             />
//             <button onClick={() => deleteCourse(course.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/database';

// function TeacherDashboard() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const coursesRef = firebase.database().ref('courses');
//     coursesRef.on('value', (snapshot) => {
//       setCourses(snapshot.val());
//     });
//   }, []);

//   return (
//     <div>
//       <h2>Teacher Dashboard</h2>
//       <ul>
//         {courses && Object.keys(courses).map((courseId) => (
//           <li key={courseId}>{courses[courseId].name}</li>
//         ))}
//       </ul>
//       {/* Add components for creating, editing, and deleting courses here */}
//     </div>
//   );
// }

// export default TeacherDashboard;

