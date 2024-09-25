import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

function TeacherDashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const coursesRef = firebase.database().ref('courses');
    coursesRef.on('value', (snapshot) => {
      setCourses(snapshot.val());
    });
  }, []);

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <ul>
        {courses && Object.keys(courses).map((courseId) => (
          <li key={courseId}>{courses[courseId].name}</li>
        ))}
      </ul>
      {/* Add components for creating, editing, and deleting courses here */}
    </div>
  );
}

export default TeacherDashboard;