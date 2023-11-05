import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import ToggleAuthForm from '../ToggleAuthForm/ToggleAuthForm';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import RegisterSuccessMessage from '../RegisterSuccessMessage/RegisterSuccessMessage';
import { setAuthErrorMessage } from '../../../store/dataAuthorisation';

const Forgot = (props) => {
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState(false);
  const { values, onBlur, handleChange, errors, isValid } =
    useFormWithValidation();

  const handleInput = (e) => {
    handleChange(e);
    dispatch(setAuthErrorMessage(''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    const { email } = values;
    const formData = {
      email,
    };
    console.log(formData);
    // props.cbLogIn(formData);
  };

  return successMessage ? (
    <RegisterSuccessMessage
      handleClose={props.onClose}
      handleSubmit={handleSubmit}
      value={values.email}
    />
  ) : (
    <>
      <AuthForm
        handleSubmit={handleSubmit}
        isLogin={props.isLogin}
        isValid={isValid}
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
          placeholder='введите e-mail'
          // queryMessage={props.queryMessage}
        />
      </AuthForm>
      <ToggleAuthForm
        isLogin={props.isLogin}
        onClick={props.onToggleFormClick}
      />
    </>
  );
};

export default Forgot;
