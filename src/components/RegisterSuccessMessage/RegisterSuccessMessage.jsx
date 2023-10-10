import React from 'react';
import { Link } from 'react-router-dom';
import successMessage from '../../images/pic_letter.svg';
import RegisterStepsScale from '../RegisterStepsScale/RegisterStepsScale';
import './RegisterSuccessMessage.css';

const RegisterSuccessMessage = (props) => {
  return (
    <>
      <RegisterStepsScale registerStep={3} />
      <div className='modal__success-message-container'>
        <img src={successMessage} className="modal__success-message-image" alt='Успешная регистрация.'></img>
        <h2 className='modal__success-message-title'>Успешная регистрация!</h2>
        <p className='modal__success-message-caption'>
          Мы отправили подтверждение на вашу почту
        </p>
        <Link
          to='/'
          className='modal__success-message-link button button_color_blue'
          onClick={props.handleClose}
        >
          На главную
        </Link>
      </div>
    </>
  );
};

export default RegisterSuccessMessage;
