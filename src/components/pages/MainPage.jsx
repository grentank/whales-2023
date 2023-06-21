import React, { useState } from 'react';

export default function MainPage() {
  const clickHandler = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    // const response = await fetch('/students');
    // const data = await response.text();
    console.log(data);
  };
  const [counter, setCounter] = useState(2);
  // let counter = 2;
  const incrementHandler = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="row">
      <div className="col-3">Push the button</div>
      <div className="col-2">
        <button onClick={clickHandler} className="btn btn-primary" type="button">
          Get Joke
        </button>
      </div>
      <div className="col-4">
        <div className="btn-group btn-group-lg" role="group" aria-label="Basic outlined example">
          <button onClick={incrementHandler} type="button" className="btn btn-outline-primary">
            +1
          </button>
          <button onClick={() => setCounter(0)} type="button" className="btn btn-outline-primary">
            {counter}
          </button>
          <button
            onClick={() => {
              setCounter((prev) => prev + 1);
              setCounter((prev) => prev + 1);
              setCounter((prev) => prev + 1);
              setCounter((prev) => prev + 1);
              setCounter((prev) => prev + 1);
            }}
            type="button"
            className="btn btn-outline-primary"
          >
            +5
          </button>
        </div>
      </div>
    </div>
  );
}
