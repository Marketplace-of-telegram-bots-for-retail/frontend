import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Close } from '../../../images/close-icon.svg';
import { ReactComponent as Back } from '../../../images/fluent_ios-arrow-24-regular.svg';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './AuthModal.css';
import Forgot from '../ForgotPassword/ForgotPassword';

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
  const navigate = useNavigate();

  function handleToggleFormClick() {
    setIsLogin(false);
    navigate('/', { replace: true });
  }

  const location = useLocation();
  const authTitle = isLogin ? 'Вход' : 'Регистрация';
  const authModal = isLogin ? (
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
  );

  return (
    <div className='modal__container modal'>
      <div
        className={`modal__content ${
          !isLogin ? 'modal__content_type_register' : ''
        }`}
      >
        <h2 className='modal__title'>
          {location.pathname === '/reset-password'
            ? 'Восстановление пароля'
            : authTitle}
        </h2>
        <Close className='modal__button_type_close' onClick={onClose} />
        {registerStep === 2 && (
          <Back
            className='modal__button_type_back'
            onClick={() => {
              setRegisterStep(1);
              setQueryMessage('');
            }}
          />
        )}
        {location.pathname === '/reset-password' ? (
          <Forgot
            isLogin={isLogin}
            onToggleFormClick={handleToggleFormClick}
            queryMessage={queryMessage}
            onClose={onClose}
            setQueryMessage={setQueryMessage}
          />
        ) : (
          authModal
        )}
      </div>
    </div>
  );
};

export default AuthModal;
