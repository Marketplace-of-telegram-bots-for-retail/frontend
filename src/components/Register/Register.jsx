import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import { ReactComponent as Eye } from '../../images/eye1.svg';

const Register = (props) => {
  const [userType, setUserType] = useState('Покупатель');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    email = email.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.length < 7 || email.length > 129)
      return 'Invalid length for email.';
    if (!emailRegex.test(email)) return 'Email format is invalid.';
    if (email.split('@').length > 2)
      return "Email must contain only one '@' symbol.";
    return '';
  };

  const validatePassword = (pass) => {
    pass = pass.trim();
    const passRegex = /^[a-zA-Z0-9!#$%.]*$/;
    if (pass.length < 8 || pass.length > 40)
      return 'Invalid length for password.';
    if (pass === email) return 'Email and password cannot be the same.';
    if (!(/[a-zA-Z]/.test(pass) && /[0-9]/.test(pass)))
      return 'Password must contain both numbers and letters.';
    if (!passRegex.test(pass)) return 'Invalid password format.';
    return '';
  };

  const validateConfirmPassword = (confirmPass) => {
    confirmPass = confirmPass.trim();
    if (confirmPass !== password) return 'Passwords do not match.';
    return validatePassword(confirmPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userType,
      email,
      password,
      rememberMe,
    };

    if (!isLogin) {
      formData.confirmPassword = confirmPassword;
    }

    // Отправить formData на сервер
  };
  return (
    <AuthForm
      userType={userType}
      setUserType={setUserType}
      rememberMe={rememberMe}
      setRememberMe={setRememberMe}
      handleSubmit={handleSubmit}
      isLogin={props.isLogin}
    >
      <AuthInput
        htmlFor='phone'
        id='phone'
        type='tel'
        error={passwordError}
        value={password}
        onChange={(e) => {
          const val = e.target.value;
          setPassword(val);
          setPasswordError(validatePassword(val));
        }}
        onBlur={() => setPassword(password.trim())}
        inputName='Телефон'
      ></AuthInput>
      <AuthInput
        htmlFor='password'
        id='password'
        type={showPassword ? 'text' : 'password'}
        error={passwordError}
        value={password}
        onChange={(e) => {
          const val = e.target.value;
          setPassword(val);
          setPasswordError(validatePassword(val));
        }}
        onBlur={() => setPassword(password.trim())}
        inputName='Пароль'
      >
        <Eye
          className='modal__eye-icon'
          onMouseDown={() => setShowPassword(true)}
          onMouseUp={() => setShowPassword(false)}
          onMouseLeave={() => setShowPassword(false)}
        />
      </AuthInput>
      <AuthInput
        htmlFor='confirmPassword'
        id='confirmPassword'
        type='password'
        error={confirmPasswordError}
        value={confirmPassword}
        onChange={(e) => {
          const val = e.target.value;
          setConfirmPassword(val);
          setConfirmPasswordError(validateConfirmPassword(val));
        }}
        onBlur={() => setConfirmPassword(confirmPassword.trim())}
        inputName='Повторите пароль'
      >
        <Eye
          className='modal__eye-icon'
          onMouseDown={() => setShowPassword(true)}
          onMouseUp={() => setShowPassword(false)}
          onMouseLeave={() => setShowPassword(false)}
        />
      </AuthInput>
    </AuthForm>
  );
};

export default Register;
