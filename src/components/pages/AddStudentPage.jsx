import React from 'react';

export default function AddStudentPage() {
  return (
    <form action="/students" method="POST">
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
    </form>
  );
}
