import React, { useState } from 'react';

export default function ConfirmDeletePage({ oneStudent }) {
  const [inputValue, setInputValue] = useState('');
  const changeHandler = (event) => setInputValue(event.target.value);
  // console.log(inputValue);
  const deleteHandler = () => {
    if (inputValue.toLowerCase() !== 'да') return;
    fetch(`/students/${oneStudent.id}/delete/confirm`).then(() => (window.location = '/students'));
  };
  return (
    <div className="card">
      <div className="card-header">Подтвердить</div>
      <div className="card-body">
        <h5 className="card-title">
          Ты уверен, что хочешь удалить: {oneStudent.name}? Напиши &quot;да&quot;
        </h5>
        <p className="card-text">Это действие нельзя будет отменить</p>
        <input
          onChange={changeHandler}
          value={inputValue}
          type="text"
          className={
            inputValue.toLowerCase() === 'да' ? 'form-control is-valid' : 'form-control is-invalid'
          }
        />
        <button onClick={deleteHandler} type="button" className="btn btn-outline-success">
          Подтвердить
        </button>
        {/* <a href="/students" className="btn btn-success">
          Не удалять
        </a>
        <a href={`/students/${oneStudent.id}/delete/confirm`} className="btn btn-danger">
          До свидания =(
        </a> */}
      </div>
    </div>
  );
}
