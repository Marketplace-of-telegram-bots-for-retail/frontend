import React from 'react';
import { useSelector } from 'react-redux';
import './ToggleAuthForm.css';
import { getAuthorisationData } from '../../../store';

const ToggleAuthForm = (props) => {
  const { isLoginModal } = useSelector(getAuthorisationData);
  return (
    <div className='modal__toggle-form'>
      <span className='modal__span'>
        {isLoginModal ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
        <span
          className='modal__span modal__span_link modal__span_type_auth-link'
          onClick={props.onClick}
        >
          {isLoginModal ? 'Зарегистрироваться' : 'Войти'}
        </span>
      </span>
    </div>
  );
};

export default ToggleAuthForm;
