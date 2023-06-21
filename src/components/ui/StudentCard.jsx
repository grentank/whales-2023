import React from 'react';

export default function StudentCard({ student }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <a href={`/students/${student.id}`}>
            <img src={`${student.git}.png`} className="img-fluid rounded-start" alt="..." />
          </a>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{student.name?.split(' ')[0]}</h5>
            <p className="card-text">{student.name?.split(' ')[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
