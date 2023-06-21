import React, { useState } from 'react';

export default function InputGroup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    cash: '0.0',
    comment: '',
  });
  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  console.log(formData);
  return (
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          name="username"
          value={formData.username}
          onChange={changeHandler}
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="basic-url" className="form-label">
          Your vanity email
        </label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            a@a.ru
          </span>
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
          />
        </div>
        <div className="form-text" id="basic-addon4">
          Example help text goes outside the input group.
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          name="cash"
          value={formData.cash}
          onChange={changeHandler}
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span className="input-group-text">.00</span>
      </div>

      <div className="input-group">
        <span className="input-group-text">With textarea</span>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={changeHandler}
          className="form-control"
          aria-label="With textarea"
        />
      </div>
    </form>
  );
}
