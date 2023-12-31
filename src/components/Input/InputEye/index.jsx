import React from 'react';
import './index.css';

export default function InputEye({ showPassword, setShowPassword }) {
  return (
    <button
      type='button'
      className={`input__eye ${showPassword ? 'input__eye_active' : ''}`}
      onMouseDown={() => setShowPassword(true)}
      onMouseUp={() => setShowPassword(false)}
      onMouseLeave={() => setShowPassword(false)}
    ></button>
  );
}
