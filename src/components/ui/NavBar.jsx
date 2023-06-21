import React from 'react';

export default function () {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Elbrus
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Main
            </a>
            <a className="nav-link" href="/students">
              Students
            </a>
            <a className="nav-link" href="/students/add">
              Add
            </a>
            <a className="nav-link" href="/cats">
              Cats/Facts
            </a>
            <a className="nav-link" href="/input">
              Input group
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
