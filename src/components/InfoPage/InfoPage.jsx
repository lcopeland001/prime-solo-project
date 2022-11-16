import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Info Page</p>
      <h2>Technologies</h2>
          <li> React</li>
          <li> Redux</li>
          <li> Express</li>
          <li> Node JS</li>
          <li> PostgreSQL</li>
          <li> Material UI</li>
    </div>
  );
}

export default InfoPage;
