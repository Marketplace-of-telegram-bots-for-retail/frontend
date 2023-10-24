import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../../Input';
import ToggleAuthForm from '../ToggleAuthForm/ToggleAuthForm';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';

const Login = (props) => {
  const { values, onBlur, handleChange, errors, isValid } =
    useFormWithValidation();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleInput = (e) => {
    handleChange(e);
    props.setQueryMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    const formData = {
      email,
      password,
      rememberMe: isCheckboxChecked,
    };
    console.log(formData);
    props.cbLogIn(formData);
  };

  return (
    <>
      <AuthForm
        handleSubmit={handleSubmit}
        isLogin={props.isLogin}
        isValid={isValid}
        isCheckboxChecked={isCheckboxChecked}
        setIsCheckboxChecked={setIsCheckboxChecked}
        queryMessage={props.queryMessage}
        setQueryMessage={props.setQueryMessage}
      >
        <Input
          name='email'
          type='email'
          error={errors.email}
          value={values.email ?? ''}
          onChange={handleInput}
          onBlur={onBlur}
          inputName='Почта'
          autoFocus
          queryMessage={props.queryMessage}
          required
        />
        <Input
          name='password'
          type='password'
          error={errors.password}
          value={values.password ?? ''}
          onChange={handleInput}
          onBlur={onBlur}
          inputName='Пароль'
          queryMessage={props.queryMessage}
          required
        />
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
