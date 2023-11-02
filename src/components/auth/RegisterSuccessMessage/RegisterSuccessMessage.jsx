import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import successMessage from '../../../images/letter.svg';
import RegisterStepsScale from '../RegisterStepsScale/RegisterStepsScale';
import './RegisterSuccessMessage.css';

const RegisterSuccessMessage = (props) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/reset-password' && <RegisterStepsScale registerStep={3} />}
      <div className='modal__success-message-container'>
        <img src={successMessage} className="modal__success-message-image" alt='Успешно.'></img>
        <h2 className='modal__success-message-title'>{location.pathname === '/reset-password' ? 'Готово' : 'Успешная регистрация!'}</h2>
        <p className='modal__success-message-caption'>
          Мы отправили подтверждение на вашу почту
        </p>
        <p className='modal__success-message-email'>{props.value}</p>
        {location.pathname === '/reset-password' &&
          <button
            className='modal__success-message-button'
            type='button'
            onClick={props.handleSubmit}
          >
            Отправить повторно
          </button>}
        <Link
          to='/'
          className='modal__success-message-link button button_color_blue'
          onClick={props.handleClose}
        >
          {location.pathname === '/reset-password' ? 'Отлично' : 'На главную'}
        </Link>
      </div>
    </>
  );
};

export default RegisterSuccessMessage;
