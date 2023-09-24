import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Close } from '../../images/close-icon.svg';
import { ReactComponent as Eye } from '../../images/eye.svg';
import './AuthModal.css';

const AuthModal = ({ onClose, isLogin, setIsLogin }) => {
  const [userType, setUserType] = useState('Покупатель');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validation

  const validateEmail = (email) => {
    email = email.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.length < 7 || email.length > 129) return 'Invalid length for email.';
    if (!emailRegex.test(email)) return 'Email format is invalid.';
    if (email.split('@').length > 2) return "Email must contain only one '@' symbol.";
    return '';
  };

  const validatePassword = (pass) => {
    pass = pass.trim();
    const passRegex = /^[a-zA-Z0-9!#$%.]*$/;
    if (pass.length < 8 || pass.length > 40) return 'Invalid length for password.';
    if (pass === email) return 'Email and password cannot be the same.';
    if (!(/[a-zA-Z]/.test(pass) && /[0-9]/.test(pass))) return 'Password must contain both numbers and letters.';
    if (!passRegex.test(pass)) return 'Invalid password format.';
    return '';
  };

  const validateConfirmPassword = (confirmPass) => {
    confirmPass = confirmPass.trim();
    if (confirmPass !== password) return 'Passwords do not match.';
    return validatePassword(confirmPass);
  };

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
          <label htmlFor='email' className='modal__label'>
            <input
              id='email'
              className={`modal__input ${emailError ? 'modal__input_error' : 'modal__input_valid'}`}
              type="email"
              value={email}
              onChange={(e) => {
                const val = e.target.value;
                setEmail(val);
                setEmailError(validateEmail(val));
              }}
              onBlur={() => setEmail(email.trim())}
              placeholder="Электронная почта"
            />
            {emailError && <span className="modal__error-message">{emailError}</span>}
          </label>
          <label htmlFor='password' className='modal__label'>
            <Eye
              className='modal__eye-icon'
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              onMouseLeave={() => setShowPassword(false)}
            />
            <input
              id='password'
              className={`modal__input ${passwordError ? 'modal__input_error' : 'modal__input_valid'}`}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                const val = e.target.value;
                setPassword(val);
                setPasswordError(validatePassword(val));
              }}
              onBlur={() => setPassword(password.trim())}
              placeholder="Пароль"
            />
            {passwordError && <span className="modal__error-message">{passwordError}</span>}
          </label>
          {!isLogin && (
          <label htmlFor='confirmPassword' className='modal__label'>
            <input
              id='confirmPassword'
              className={`modal__input ${confirmPasswordError ? 'modal__input_error' : 'modal__input_valid'}`}
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                const val = e.target.value;
                setConfirmPassword(val);
                setConfirmPasswordError(validateConfirmPassword(val));
              }}
              onBlur={() => setConfirmPassword(confirmPassword.trim())}
              placeholder="Повторите пароль"
            />
            {confirmPasswordError && <span className="modal__error-message">{confirmPasswordError}</span>}
            </label>
          )}
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