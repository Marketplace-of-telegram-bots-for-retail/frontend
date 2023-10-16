import React, { useEffect, useState } from 'react';
import './AuthButtons.css';
import AuthModal from '../AuthModal/AuthModal';
import { ReactComponent as Triangle } from '../../../images/triangle.svg';

const AuthButtons = ({
  cbLogIn,
  cbRegister,
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
  const handleCloseModal = () => {
    setShowAuthButtons(false);
    setShowModal(false);
  };
  return !showModal ? (
    !isAuthorized && (
      <div
        className='auth-buttons page__modal modal'
        onClick={(e) => handleOverlay(e)}
      >
        <div className='auth-buttons__container'>
          <Triangle className='auth-buttons__triangle' />
          <button
            className='auth-buttons__button auth-buttons__button_accent'
            type='button'
            onClick={() => {
              setIsLogin(true);
              setShowModal(true);
            }}
          >
            Войти
          </button>
          <button
            className='auth-buttons__button'
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
    )
  ) : (
    <AuthModal
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      onClose={() => handleCloseModal()}
      cbLogIn={cbLogIn}
      cbRegister={cbRegister}
    />
  );
};

export default AuthButtons;
