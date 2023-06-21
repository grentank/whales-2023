import React, { useState } from 'react';

export default function AddStudentPage() {
  const [error, setError] = useState(null);
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    // console.log('formData', formData);
    try {
      const res = await fetch('/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.status !== 200) return setError(await res.json());
      const newStudent = await res.json();
      alert(`Студент ${newStudent.name} добавлен!`);
      window.location = '/students';
    } catch (fetchErr) {
      setError(fetchErr);
      // alert('Что-то пошло не так');
    }
  };
  return (
    <form onSubmit={submitHandler} action="/students" method="POST">
      <div className="mb-3">
        <label htmlFor="nameinput" className="form-label">
          Имя
        </label>
        <input name="name" type="text" className="form-control" id="nameinput" />
      </div>
      <div className="mb-3">
        <label htmlFor="gitinput" className="form-label">
          Git
        </label>
        <input name="git" type="text" className="form-control" id="gitinput" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {error && <p className="text-danger">{error.message}</p>}
    </form>
  );
}
