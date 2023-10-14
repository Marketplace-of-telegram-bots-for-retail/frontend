import React, { useEffect, useState } from 'react';
import './AuthButtons.css';
import AuthModal from '../AuthModal/AuthModal';
import { ReactComponent as Triangle } from '../../../images/triangle.svg';

const AuthButtons = ({
  cbLogIn,
  cbRegister,
  setAuthorized,
  isAuthorized,
  setShowAuthButtons,
  showAuthButtons,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true for login, false for signup

  // указываем `useEffect` для обработчика `Escape`
  useEffect(() => {
    if (!showAuthButtons) return;
    function handleEscapeKey(e) {
      if (e.code === 'Escape') {
        setShowAuthButtons(false);
      }
    }
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [showAuthButtons, setShowAuthButtons]);

  // создаем обработчик оверлея
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setShowAuthButtons(false);
    }
  };

  return !showModal ? (
    !isAuthorized && (
      <div className='page__modal modal' onClick={(e) => handleOverlay(e)}>
        <div className='modal__auth-btns auth-btns'>
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
      </div>
    )
  ) : (
    <AuthModal
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      onClose={() => setShowModal(false)}
      cbLogIn={cbLogIn}
      cbRegister={cbRegister}
      setAuthorized={setAuthorized}
    />
  );
};

export default AuthButtons;
