import React, { useState } from 'react';
import { ReactComponent as Close } from '../../images/close-icon.svg';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './AuthModal.css';

const AuthModal = ({ onClose, isLogin, setIsLogin }) => {
  const [userType, setUserType] = useState('Покупатель');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className='modal__container'>
      <div className='modal__content'>
        <h2 className='modal__title'>{isLogin ? 'Вход' : 'Регистрация'}</h2>
        <Close className='modal__close' onClick={onClose} />
        {isLogin ? (
          <Login
            isLogin={isLogin}
            userType={userType}
            setUserType={setUserType}
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
            onToggleFormClick={() => setIsLogin(false)}
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
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
