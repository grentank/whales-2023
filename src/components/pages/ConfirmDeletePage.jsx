import React from 'react';

export default function ConfirmDeletePage({ oneStudent }) {
  return (
    <div className="card">
      <div className="card-header">Подтвердить</div>
      <div className="card-body">
        <h5 className="card-title">Ты уверен, что хочешь удалить: {oneStudent.name}?</h5>
        <p className="card-text">Это действие нельзя будет отменить</p>
        <a href="/students" className="btn btn-success">
          Не удалять
        </a>
        <a href={`/students/${oneStudent.id}/delete/confirm`} className="btn btn-danger">
          До свидания =(
        </a>
      </div>
    </div>
  );
}
