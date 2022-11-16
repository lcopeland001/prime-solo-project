import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>About</h2>
        <p>Business Management Solutions app will be used to organize many aspects of a small business in one place. A user can create detail pages for different aspects of their business like homes for a real estate company or projects for a contractor. The app will include all needed information on a user-friendly interface for company employees to use to track and analyze the various aspects of the business. </p>
      </div>

    </div>
  );
}

export default AboutPage;
