import React, { useState } from 'react';
import './AuthButtons.css';
import AuthModal from '../AuthModal/AuthModal';
import { ReactComponent as Triangle } from '../../../images/triangle.svg';

const AuthButtons = (props) => {
  const [isLogin, setIsLogin] = useState(true); // true for login, false for signup

  const handleCloseModal = () => {
    props.setShowAuthButtons(false);
    props.setShowAuthModal(false);
  };

  return !props.showAuthModal ? (
    !props.isAuthorized && (
      <div
        className='auth-buttons page__modal modal'
        onClick={() => {
          props.setShowAuthButtons(true);
        }}
      >
        <div className='auth-buttons__container'>
          <Triangle className='auth-buttons__triangle' />
          <button
            className='auth-buttons__button auth-buttons__button_accent'
            type='button'
            onClick={() => {
              setIsLogin(true);
              props.setShowAuthModal(true);
            }}
          >
            Войти
          </button>
          <button
            className='auth-buttons__button'
            type='button'
            onClick={() => {
              setIsLogin(false);
              props.setShowAuthModal(true);
            }}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    )
  ) : (
    <AuthModal
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      onClose={handleCloseModal}
      cbLogIn={props.cbLogIn}
      cbRegister={props.cbRegister}
    />
  );
};

export default AuthButtons;
