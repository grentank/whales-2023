import React, { useState } from 'react';

export default function CatFactsPage() {
  const [catFact, setCatFact] = useState(null);
  const clickHandler = async () => {
    const res = await fetch('https://catfact.ninja/fact');
    const fact = await res.json();
    setCatFact(fact);
  };
  return (
    <div className="row">
      <div className="col-2">
        <button onClick={clickHandler} className="btn btn-primary" type="button">
          Get fact
        </button>
      </div>
      <div className="col-6">{catFact ? catFact.fact : 'No fact yet. Push the button'}</div>
    </div>
  );
}
