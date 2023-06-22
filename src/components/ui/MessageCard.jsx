import React from 'react';
import TrashIcon from './icons/TrashIcon';
import InfoCircleIcon from './icons/InfoCircleIcon';
import PencilIcon from './icons/PencilIcon';

export default function MessageCard({ message, deleteHandler }) {
  return (
    <div className="card mt-2">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5>{message.Student.name}</h5>
        <div className="btn-group-sm" role="group">
          <button type="button" className="btn m-1 btn-outline-primary">
            <InfoCircleIcon />
          </button>
          <button type="button" className="btn m-1 btn-outline-info">
            <PencilIcon />
          </button>
          <button
            onClick={() => deleteHandler(message.id)}
            type="button"
            className="btn m-1 btn-outline-danger"
          >
            <TrashIcon />
          </button>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{message.title}</h5>
        <p className="card-text">{message.body}</p>
        <footer className="blockquote-footer">
          {new Date(message.createdAt).toLocaleString('ru-RU')}
        </footer>
      </div>
    </div>
  );
}
