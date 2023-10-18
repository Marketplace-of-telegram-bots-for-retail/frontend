import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import { ReactComponent as Eye } from '../../../images/eye1.svg';
import ToggleAuthForm from '../ToggleAuthForm/ToggleAuthForm';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { values, onBlur, handleChange, errors, isValid } =
    useFormWithValidation();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleInput = (e) => {
    handleChange(e);
    props.setQueryMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userType, rememberMe } = props;
    const { email, password } = values;
    const formData = {
      userType,
      email,
      password,
      rememberMe,
    };
    console.log(formData);
    props.cbLogIn(formData);
  };
  return (
    <>
      <AuthForm
        rememberMe={props.rememberMe}
        setRememberMe={props.setRememberMe}
        handleSubmit={handleSubmit}
        isLogin={props.isLogin}
        isValid={isValid}
        isCheckboxChecked={isCheckboxChecked}
        setIsCheckboxChecked={setIsCheckboxChecked}
        queryMessage={props.queryMessage}
        setQueryMessage={props.setQueryMessage}
      >
        <AuthInput
          htmlFor='email'
          name='email'
          type='email'
          error={errors.email}
          value={values.email ?? ''}
          onChange={handleInput}
          onBlur={onBlur}
          inputName='Почта'
          autoFocus
          queryMessage={props.queryMessage}
        />
        <AuthInput
          htmlFor='password'
          name='password'
          type={showPassword ? 'text' : 'password'}
          error={errors.password}
          value={values.password ?? ''}
          onChange={handleInput}
          onBlur={onBlur}
          inputName='Пароль'
          queryMessage={props.queryMessage}
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
