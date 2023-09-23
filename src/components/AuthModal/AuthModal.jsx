import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // добавьте это состояние в AuthModal
  const [userType, setUserType] = useState('Покупатель');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    const formData = {
      userType,
      email,
      password,
      rememberMe
    };

    if (!isLogin) {
      formData.confirmPassword = confirmPassword;
    }

    // Отправить formData на сервер
  };

  return (
    <div style={{ position: 'absolute', top: '10%', left: '10%', background: 'white', padding: '20px', borderRadius: '12px' }}>
      <div>
        <h2>{isLogin ? 'Войти' : 'Регистрация'}</h2>
        <button type="button" onClick={onClose}>X</button>
      </div>
      <div>
        <button type="button" onClick={() => setUserType('Покупатель')}>Покупатель</button>
        <button type="button" onClick={() => setUserType('Продавец')}>Продавец</button>
      </div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Электронная почта" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
      {!isLogin && <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Повторите пароль" />}
      <label htmlFor="rememberMe">
        <input id="rememberMe" type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
        Запомнить меня
      </label>
      <button type="submit" onClick={handleSubmit}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
      {isLogin ? (
        <div>
          <Link to="/reset-password">Забыли пароль?</Link>
          <span>
            Нет аккаунта?
            {' '}
            <button type='submit' onClick={() => setIsLogin(false)}>Зарегистрироваться</button>
          </span>
        </div>
      ) : (
        <div>
          <span>
            Есть аккаунт?
            {' '}
            <button type='submit' onClick={() => setIsLogin(true)}>Войти</button>
          </span>
        </div>
      )}
    </div>
  );
};

export default AuthModal;