import React from 'react';
import { ReactComponent as Close } from '../../../images/close-icon.svg';
import { ReactComponent as Back } from '../../../images/fluent_ios-arrow-24-regular.svg';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './AuthModal.css';

const AuthModal = ({
  onClose,
  isLogin,
  setIsLogin,
  cbLogIn,
  cbRegister,
  queryMessage,
  setQueryMessage,
  registerStep,
  setRegisterStep,
}) => {
  return (
    <div className='modal__container modal'>
      <div
        className={`modal__content ${
          !isLogin ? 'modal__content_type_register' : ''
        }`}
      >
        <h2 className='modal__title'>{isLogin ? 'Вход' : 'Регистрация'}</h2>
        <Close
          className='modal__button_type_close'
          onClick={() => {
            onClose();
            setRegisterStep(1);
          }}
        />
        {registerStep === 2 && (
          <Back
            className='modal__button_type_back'
            onClick={() => {
              setRegisterStep(1);
              setQueryMessage('');
            }}
          />
        )}
        {isLogin ? (
          <Login
            isLogin={isLogin}
            onToggleFormClick={() => setIsLogin(false)}
            cbLogIn={cbLogIn}
            queryMessage={queryMessage}
            setQueryMessage={setQueryMessage}
          />
        ) : (
          <Register
            isLogin={isLogin}
            onToggleFormClick={() => setIsLogin(true)}
            cbRegister={cbRegister}
            onClose={onClose}
            registerStep={registerStep}
            setRegisterStep={setRegisterStep}
            queryMessage={queryMessage}
            setQueryMessage={setQueryMessage}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
