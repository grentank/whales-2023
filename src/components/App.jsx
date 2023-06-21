import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './ui/NavBar';
import MainPage from './pages/MainPage';
import StudentsPage from './pages/StudentsPage';
import OneStudentPage from './pages/OneStudentPage';
import ConfirmDeletePage from './pages/ConfirmDeletePage';
import AddStudentPage from './pages/AddStudentPage';
import NotFoundPage from './pages/NotFoundPage';
import CatFactsPage from './pages/CatFactsPage';
import InputGroup from './pages/InputGroup';

export default function App({ allStudents, oneStudent }) {
  console.log('Greetings, ELbrus students!');
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/students" element={<StudentsPage allStudents={allStudents} />} />
        <Route path="/students/:id" element={<OneStudentPage oneStudent={oneStudent} />} />
        <Route
          path="/students/:id/delete"
          element={<ConfirmDeletePage oneStudent={oneStudent} />}
        />
        <Route path="/students/add" element={<AddStudentPage />} />
        <Route path="/cats" element={<CatFactsPage />} />
        <Route path="/input" element={<InputGroup />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
