import React from 'react';

export default function AddMesageForm({ allStudents, submitHandler }) {
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="titlemessage" className="form-label">
          Заголовок
          <input type="text" name="title" className="form-control" id="titlemessage" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="bodymessage" className="form-label">
          Текст
          <input type="text" name="body" className="form-control" id="bodymessage" />
        </label>
      </div>
      <select name="authorId" defaultValue={0} className="form-select" aria-label="Select student">
        <option key={0} value={0} disabled>
          Выбери студента
        </option>
        {allStudents.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary">
        Отправить
      </button>
    </form>
  );
}
