import React from 'react';

const ToggleAuthForm = ({ isLogin, onClick }) => {
  return (
    <div className='modal__toggle-form'>
      <span className='modal__span'>
        {isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}
        <span
          className='modal__span modal__span_link modal__span_type_auth-link'
          onClick={onClick}
        >
          {isLogin ? 'Зарегистрироваться' : 'Войти'}
        </span>
      </span>
    </div>
  );
};

export default ToggleAuthForm;
