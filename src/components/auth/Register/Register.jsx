import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import ToggleAuthForm from '../ToggleAuthForm/ToggleAuthForm';
import { ReactComponent as Eye } from '../../../images/eye1.svg';
import RegisterSuccessMessage from '../RegisterSuccessMessage/RegisterSuccessMessage';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';

const Register = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const { values, onBlur, handleChange, errors, isValid } =
    useFormWithValidation();

  const handleInput = (e) => {
    handleChange(e);
    props.setQueryMessage('');
  };

  const handleStepOne = (e) => {
    e.preventDefault();
    const { name, surname, email } = values;
    localStorage.setItem(
      'registerFormData',
      JSON.stringify({
        first_name: name,
        last_name: surname,
        email,
      })
    );
    props.setRegisterStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = JSON.parse(localStorage.getItem('registerFormData'));
    const { phone, password, confirmPassword } = values;
    formData.phone = phone;
    formData.password = password;
    formData.re_password = confirmPassword;
    console.log(formData);
    props.cbRegister(formData);
    // сюда всегда передается пустая строка, пофиксить
    console.log(props.queryMessage);
    if (props.queryMessage === '') props.setRegisterStep(3);
  };

  return (
    <>
      {props.registerStep === 1 || props.registerStep === 2 ? (
        <AuthForm
          rememberMe={props.rememberMe}
          setRememberMe={props.setRememberMe}
          handleSubmit={
            (props.registerStep === 1 && handleStepOne) ||
            (props.registerStep === 2 && handleSubmit)
          }
          isLogin={props.isLogin}
          isValid={isValid}
          registerStep={props.registerStep}
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
          queryMessage={props.queryMessage}
          setQueryMessage={props.setQueryMessage}
        >
          {props.registerStep === 1 && (
            <>
              <AuthInput
                htmlFor='name'
                name='name'
                type='text'
                error={errors.name}
                value={values.name ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
                inputName='Имя'
                placeholder='Иван'
                autoFocus
              ></AuthInput>
              <AuthInput
                htmlFor='surname'
                name='surname'
                type='text'
                error={errors.surname}
                value={values.surname ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
                inputName='Фамилия'
                placeholder='Иванов'
              ></AuthInput>
              <AuthInput
                htmlFor='email'
                name='email'
                type='email'
                error={errors.email}
                value={values.email ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
                inputName='Почта'
                placeholder='example@mail.ru'
              />
            </>
          )}
          {props.registerStep === 2 && (
            <>
              <AuthInput
                htmlFor='phone'
                name='phone'
                type='tel'
                error={errors.phone}
                value={values.phone ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
                inputName='Телефон'
                placeholder='+7'
                autoFocus
              ></AuthInput>
              <AuthInput
                htmlFor='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                error={errors.password}
                value={values.password ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
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
                name='confirmPassword'
                type={showConfirmPassword ? 'text' : 'password'}
                error={errors.confirmPassword}
                value={values.confirmPassword ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
                inputName='Повторите пароль'
              >
                <Eye
                  className='modal__eye-icon'
                  onMouseDown={() => setShowConfirmPassword(true)}
                  onMouseUp={() => setShowConfirmPassword(false)}
                  onMouseLeave={() => setShowConfirmPassword(false)}
                />
              </AuthInput>
            </>
          )}
        </AuthForm>
      ) : (
        <RegisterSuccessMessage handleClose={props.onClose} />
      )}
      {props.registerStep !== 3 && (
        <ToggleAuthForm
          isLogin={props.isLogin}
          onClick={props.onToggleFormClick}
        />
      )}
    </>
  );
};

export default Register;
