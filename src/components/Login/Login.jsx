import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import { ReactComponent as Eye } from '../../images/eye1.svg';
import { validateEmail, validatePassword } from '../../utils/validation';
import ToggleAuthForm from '../ToggleAuthForm/ToggleAuthForm';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userType, rememberMe } = props;
    const formData = {
      userType,
      email,
      password,
      rememberMe,
    };
    console.log(formData);
    props.cbLogIn(formData);
    props.setAuthorized(true);
    props.handleClose();

    // if (!isLogin) {
    //   formData.confirmPassword = confirmPassword;
    // }

    // Отправить formData на сервер
  };
  return (
    <>
      <AuthForm
        userType={props.userType}
        setUserType={props.setUserType}
        rememberMe={props.rememberMe}
        setRememberMe={props.setRememberMe}
        handleSubmit={handleSubmit}
        isLogin={props.isLogin}
      >
        <AuthInput
          htmlFor='email'
          id='email'
          type='email'
          error={emailError}
          value={email}
          onChange={(e) => {
            const val = e.target.value;
            setEmail(val);
            setEmailError(validateEmail(val));
          }}
          onBlur={() => setEmail(email.trim())}
          inputName='Почта'
        />
        <AuthInput
          htmlFor='password'
          id='password'
          type={showPassword ? 'text' : 'password'}
          error={passwordError}
          value={password}
          onChange={(e) => {
            const val = e.target.value;
            setPassword(val);
            setPasswordError(validatePassword(val, email));
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
      </AuthForm>
      <Link
        to='/reset-password'
        className='modal__span modal__span_type_reset-password'
      >
        Забыли пароль?
      </Link>
      <ToggleAuthForm
        isLogin={props.isLogin}
        onClick={props.onToggleFormClick}
      />
    </>
  );
};

export default Login;
