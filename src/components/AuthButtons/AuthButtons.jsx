import React, { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';

const AuthButtons = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true for login, false for signup

  return (
    <div>
      <button type='button' onClick={() => { setIsLogin(true); setShowModal(true); }}>Войти</button>
      <button type='button' onClick={() => { setIsLogin(false); setShowModal(true); }}>Зарегистрироваться</button>

      {showModal && <AuthModal isLogin={isLogin} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default AuthButtons;
