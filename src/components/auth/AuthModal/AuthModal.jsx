import React, { useState } from 'react';
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
  setAuthorized,
}) => {
  const [userType, setUserType] = useState('Покупатель');
  const [rememberMe, setRememberMe] = useState(false);
  const [registerStep, setRegisterStep] = useState(1);

  return (
    <div className='modal__container'>
      <div
        className={`modal__content ${
          !isLogin ? 'modal__content_type_register' : ''
        }`}
      >
        <h2 className='modal__title'>{isLogin ? 'Вход' : 'Регистрация'}</h2>
        <Close className='modal__close' onClick={onClose} />
        {registerStep === 2 && (
          <Back className='modal__back' onClick={() => setRegisterStep(1)} />
        )}
        {isLogin ? (
          <Login
            isLogin={isLogin}
            userType={userType}
            setUserType={setUserType}
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
            onToggleFormClick={() => setIsLogin(false)}
            cbLogIn={cbLogIn}
            handleClose={onClose}
            setAuthorized={setAuthorized}
          />
        ) : (
          <Register
            isLogin={isLogin}
            userType={userType}
            setUserType={setUserType}
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
            onToggleFormClick={() => setIsLogin(true)}
            onClose={onClose}
            registerStep={registerStep}
            setRegisterStep={setRegisterStep}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
