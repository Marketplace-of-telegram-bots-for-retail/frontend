import React from 'react';
import './RegisterStepsScale.css';

const RegisterStepsScale = ({ registerStep }) => {
  return (
    <div className='scale__container'>
      <div className='scale__line'>
        <div
          className={`scale__step ${
            registerStep === 2 || registerStep === 3 ? 'scale__step_active' : ''
          }`}
        ></div>
        <div
          className={`scale__step ${
            registerStep === 3 ? 'scale__step_active' : ''
          }`}
        ></div>
      </div>
      <ul className='scale__caption-list'>
        <li className='scale__caption-item'>
          <div
            className={`scale__caption-round ${
              registerStep ? 'scale__caption-round_active' : ''
            }`}
          ></div>
          <p
            className={`scale__caption-text ${
              registerStep ? 'scale__caption-text_active' : ''
            }`}
          >
            Шаг 1
          </p>
        </li>
        <li className='scale__caption-item'>
          <div
            className={`scale__caption-round ${
              registerStep === 2 || registerStep === 3
                ? 'scale__caption-round_active'
                : ''
            }`}
          ></div>
          <p
            className={`scale__caption-text ${
              registerStep === 2 || registerStep === 3
                ? 'scale__caption-text_active'
                : ''
            }`}
          >
            Шаг 2
          </p>
        </li>
        <li className='scale__caption-item'>
          <div
            className={`scale__caption-round ${
              registerStep === 3 ? 'scale__caption-round_active' : ''
            }`}
          ></div>
          <p
            className={`scale__caption-text ${
              registerStep === 3 ? 'scale__caption-text_active' : ''
            }`}
          >
            Шаг 3
          </p>
        </li>
      </ul>
    </div>
  );
};

export default RegisterStepsScale;
