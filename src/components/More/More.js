import React from 'react';
import './More.css';

export const More = ({ onClick }) => {
  return (
    <button
      className="movies__more"
      onClick={onClick}
    >
      Еще
    </button>
  );
};
