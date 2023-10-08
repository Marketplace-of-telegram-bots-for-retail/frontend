import React from 'react';
import { Link } from 'react-router-dom';
import successMessage from '../../images/pic_letter.svg';

const RegisterSuccessMessage = () => {
  return (
    <div>
      <img src={successMessage} alt='Успешная регистрация.'></img>
      <h2>Успешная регистрация!</h2>
      <p>Мы отправили подтверждение на вашу почту</p>
      <Link to='/'>На главную</Link>
    </div>
  );
};

export default RegisterSuccessMessage;
