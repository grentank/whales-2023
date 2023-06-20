import React from 'react';
import StudentCard from '../ui/StudentCard';

export default function StudentsPage({ allStudents }) {
  return allStudents.map((student) => <StudentCard student={student} />);
}
