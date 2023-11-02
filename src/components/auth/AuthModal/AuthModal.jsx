import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Close } from '../../../images/close-icon.svg';
import { ReactComponent as Back } from '../../../images/fluent_ios-arrow-24-regular.svg';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './AuthModal.css';
import Forgot from '../ForgotPassword/ForgotPassword';
import { getAuthorisationData } from '../../../store';
import {
  setRegisterStep,
  setIsLoginModal,
  setAuthErrorMessage,
} from '../../../store/dataAuthorisation';

const AuthModal = ({ onClose, cbLogIn, cbRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { registerStep, isLoginModal } = useSelector(getAuthorisationData);

  function handleToggleFormClick() {
    dispatch(setIsLoginModal(false));
    navigate('/', { replace: true });
  }

  const location = useLocation();
  const authTitle = isLoginModal ? 'Вход' : 'Регистрация';
  const authModal = isLoginModal ? (
    <Login
      onToggleFormClick={() => dispatch(setIsLoginModal(false))}
      cbLogIn={cbLogIn}
    />
  ) : (
    <Register
      onToggleFormClick={() => dispatch(setIsLoginModal(true))}
      cbRegister={cbRegister}
      onClose={onClose}
    />
  );

  return (
    <div className='modal__container modal'>
      <div
        className={`modal__content ${
          !isLoginModal ? 'modal__content_type_register' : ''
        }`}
      >
        <h2 className='modal__title'>
          {location.pathname === '/reset-password'
            ? 'Восстановление пароля'
            : authTitle}
        </h2>
        <Close className='modal__button_type_close' onClick={onClose} />
        {!isLoginModal && registerStep === 2 && (
          <Back
            className='modal__button_type_back'
            onClick={() => {
              dispatch(setRegisterStep(1));
              dispatch(setAuthErrorMessage(''));
            }}
          />
        )}
        {location.pathname === '/reset-password' ? (
          <Forgot
            isLogin={isLoginModal}
            onToggleFormClick={handleToggleFormClick}
            onClose={onClose}
          />
        ) : (
          authModal
        )}
      </div>
    </div>
  );
};

export default AuthModal;
