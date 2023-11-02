import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
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
} from '../../../store/dataAuthorisation';

const AuthModal = ({
  onClose,
  cbLogIn,
  cbRegister,
  queryMessage,
  setQueryMessage,
}) => {
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
      queryMessage={queryMessage}
      setQueryMessage={setQueryMessage}
    />
  ) : (
    <Register
      onToggleFormClick={() => dispatch(setIsLoginModal(true))}
      cbRegister={cbRegister}
      onClose={onClose}
      queryMessage={queryMessage}
      setQueryMessage={setQueryMessage}
    />
  );

  return (
    <div className='modal__container modal'>
      <div
        className={`modal__content ${
          !isLoginModal ? 'modal__content_type_register' : ''
        }`}
      >
        {location.pathname === '/reset-password' && (
          <Link className='modal__link-back' to={-1}></Link>
        )}
        <h2 className='modal__title'>
          {location.pathname === '/reset-password'
            ? 'Восстановление доступа'
            : authTitle}
        </h2>
        <Close className='modal__button_type_close' onClick={onClose} />
        {!isLoginModal && registerStep === 2 && (
          <Back
            className='modal__button_type_back'
            onClick={() => {
              dispatch(setRegisterStep(1));
              setQueryMessage('');
            }}
          />
        )}
        {location.pathname === '/reset-password' ? (
          <Forgot
            isLogin={isLoginModal}
            onToggleFormClick={handleToggleFormClick}
            queryMessage={queryMessage}
            onClose={onClose}
            setQueryMessage={setQueryMessage}
            goBack={() => {
              setGoBack(true);
            }}
          />
        ) : (
          authModal
        )}
      </div>
    </div>
  );
};

export default AuthModal;
