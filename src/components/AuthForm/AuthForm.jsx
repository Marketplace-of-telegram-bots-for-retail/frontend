import React from 'react';

const AuthForm = ({ children, ...props }) => {
  return (
    <form className='modal__form'>
      <div className='modal__inputs'>
        <div className='modal__user-type-box'>
          <button
            className={`modal__user-type-btn ${
              props.userType === 'Покупатель'
                ? 'modal__user-type-btn_active'
                : 'modal__user-type-btn_inactive'
            }`}
            type='button'
            onClick={() => props.setUserType('Покупатель')}
          >
            Покупатель
          </button>
          <button
            className={`modal__user-type-btn ${
              props.userType === 'Продавец'
                ? 'modal__user-type-btn_active'
                : 'modal__user-type-btn_inactive'
            }`}
            type='button'
            onClick={() => props.setUserType('Продавец')}
          >
            Продавец
          </button>
        </div>
        {children}
        <div className='modal__remember-checkbox'>
          <button
            type='button'
            className={`modal__remember-icon ${
              props.rememberMe
                ? 'modal__remember-icon_checked'
                : 'modal__remember-icon_blank'
            }`}
            onClick={() => props.setRememberMe(!props.rememberMe)}
          />
          <span className='modal__span'>Запомнить меня</span>
        </div>
      </div>
      <button
        className='modal__submit-btn'
        type='submit'
        onClick={props.handleSubmit}
      >
        {props.isLogin ? 'Войти' : 'Далее'}
      </button>
    </form>
  );
};

export default AuthForm;
