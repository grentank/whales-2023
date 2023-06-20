import React from 'react';

export default function OneStudentPage({ oneStudent }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`${oneStudent.git}.png`} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{oneStudent.name}</h5>
            {/* <p className="card-text">
              
            </p> */}
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date(oneStudent.createdAt).toLocaleString('ru-RU')}
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <a className="btn btn-danger" href={`/students/${oneStudent.id}/delete`}>
            Удалить студента
          </a>
        </div>
      </div>
    </div>
  );
}
