import React, { useState } from 'react';
import './AuthButtons.css';
import AuthModal from '../AuthModal/AuthModal';
import { ReactComponent as Triangle } from '../../../images/triangle.svg';

const AuthButtons = ({ cbLogIn, setAuthorized, isAuthorized }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true for login, false for signup

  return !showModal ? !isAuthorized && (
    <div className='auth-btns'>
      <div className='auth-btns__container'>
        <Triangle className='auth-btns__triangle' />
        <button
          className='auth-btns__btn auth-btns__btn_accent'
          type='button'
          onClick={() => {
            setIsLogin(true);
            setShowModal(true);
          }}
        >
          Войти
        </button>
        <button
          className='auth-btns__btn'
          type='button'
          onClick={() => {
            setIsLogin(false);
            setShowModal(true);
          }}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  ) : (
    <AuthModal
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      onClose={() => setShowModal(false)}
      cbLogIn={cbLogIn}
      setAuthorized={setAuthorized}
    />
  );
};

export default AuthButtons;
