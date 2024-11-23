import React from 'react';

const AlertButton = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button data-testid="alert-button" onClick={handleClick}>
      Click me
    </button>
  );
};

export default AlertButton;
