import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div>
      <h1 data-testid="greeting-message">
        Hello, {name ? name : ''} {/* Menangani nama kosong */}
      </h1>
    </div>
  );
};

export default Greeting;
