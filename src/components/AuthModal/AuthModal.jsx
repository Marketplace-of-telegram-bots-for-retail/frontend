import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Close } from '../../images/close-icon.svg';
import './AuthModal.css';

const AuthModal = ({ onClose, isLogin, setIsLogin }) => {
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
    <div className='modal__container'>
      <div className='modal__content'>
        <h2 className='modal__title'>{isLogin ? 'Войти' : 'Регистрация'}</h2>
        <Close className='modal__close' onClick={onClose} />
        <div className='modal__inputs'>
          <div className='modal__user-type-box'>
            <button
              className={`modal__user-type-btn ${userType === 'Покупатель' ? 'modal__user-type-btn_active' : 'modal__user-type-btn_inactive'}`}
              type="button"
              onClick={() => setUserType('Покупатель')}
            >
              Покупатель
            </button>
            <button
              className={`modal__user-type-btn ${userType === 'Продавец' ? 'modal__user-type-btn_active' : 'modal__user-type-btn_inactive'}`}
              type="button"
              onClick={() => setUserType('Продавец')}
            >
              Продавец
            </button>
          </div>
          <input className='modal__input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Электронная почта" />
          <input className='modal__input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
          {!isLogin && <input className='modal__input' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Повторите пароль" />}
          <div className='modal__remember-checkbox'>
            <button type='button' className={`modal__remember-icon ${rememberMe ? 'modal__remember-icon_checked' : 'modal__remember-icon_blank'}`} onClick={() => setRememberMe(!rememberMe)} />
            <span className='modal__span'>Запомнить меня</span>
          </div>
        </div>
        <button className='modal__submit-btn' type="submit" onClick={handleSubmit}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
        {isLogin ? (
          <>
            <Link className='modal__span' to="/reset-password">Забыли пароль?</Link>
            <div className='modal__toggle-form'>
              <span className='modal__span'>
                Нет аккаунта?
                {' '}
                <span className='modal__span modal__span_link' onClick={() => setIsLogin(false)}>Зарегистрироваться</span>
              </span>
            </div>
          </>
        ) : (
          <div className='modal__toggle-form'>
            <span className='modal__span'>
              Есть аккаунт?
              {' '}
              <span className='modal__span modal__span_link' onClick={() => setIsLogin(true)}>Войти</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;