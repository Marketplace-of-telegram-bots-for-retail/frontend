import React, { useState } from 'react';
import './AuthButtons.css';
import AuthModal from '../AuthModal/AuthModal';
import { ReactComponent as Triangle } from '../../images/triangle.svg';

const AuthButtons = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true for login, false for signup

  return (
    <>
      {!showModal && (
      <div className='auth-btns'>
        <div className='auth-btns__container'>
          <Triangle className='auth-btns__triangle' />
          <button className='auth-btns__btn auth-btns__btn_accent' type='button' onClick={() => { setIsLogin(true); setShowModal(true); }}>Войти</button>
          <button className='auth-btns__btn' type='button' onClick={() => { setIsLogin(false); setShowModal(true); }}>Зарегистрироваться</button>
        </div>
      </div>
      )}
      {showModal && <AuthModal isLogin={isLogin} setIsLogin={setIsLogin} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default AuthButtons;