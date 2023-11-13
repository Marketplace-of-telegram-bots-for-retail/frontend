import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../../Input';
import ToggleAuthForm from '../ToggleAuthForm/ToggleAuthForm';
import RegisterSuccessMessage from '../RegisterSuccessMessage/RegisterSuccessMessage';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import { setRegisterStep, setAuthErrorMessage } from '../../../store/actions';
import { getUserData } from '../../../store';

const Register = (props) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const dispatch = useDispatch();
  const { registerStep } = useSelector(getUserData);

  const { values, onBlur, handleChange, errors, isValid } =
    useFormWithValidation();

  const handleInput = (e) => {
    handleChange(e);
    dispatch(setAuthErrorMessage(''));
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
    dispatch(setRegisterStep(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = JSON.parse(localStorage.getItem('registerFormData'));
    const { phone, password, confirmPassword } = values;
    formData.phone = phone;
    formData.password = password;
    formData.re_password = confirmPassword;
    // console.log(formData);
    props.cbRegister(formData);
  };

  return (
    <>
      {registerStep === 1 || registerStep === 2 ? (
        <AuthForm
          rememberMe={props.rememberMe}
          setRememberMe={props.setRememberMe}
          handleSubmit={
            (registerStep === 1 && handleStepOne) ||
            (registerStep === 2 && handleSubmit)
          }
          isValid={isValid}
          registerStep={registerStep}
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
        >
          {registerStep === 1 && (
            <>
              <Input
                name='name'
                type='text'
                error={errors.name}
                value={values.name ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
                inputName='Имя'
                placeholder='Иван'
                autoFocus
                required
              />
              <Input
                name='surname'
                type='text'
                error={errors.surname}
                value={values.surname ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
                inputName='Фамилия'
                placeholder='Иванов'
                required
              />
              <Input
                name='email'
                type='email'
                error={errors.email}
                value={values.email ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
                inputName='Почта'
                placeholder='example@mail.ru'
                required
              />
            </>
          )}
          {registerStep === 2 && (
            <>
              <Input
                name='phone'
                type='tel'
                error={errors.phone}
                value={values.phone ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
                inputName='Телефон'
                placeholder='+7'
                autoFocus
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
                required
              />
              <Input
                name='confirmPassword'
                type='password'
                error={errors.confirmPassword}
                value={values.confirmPassword ?? ''}
                onChange={handleInput}
                onBlur={onBlur}
                inputName='Повторите пароль'
                required
              />
            </>
          )}
        </AuthForm>
      ) : (
        <RegisterSuccessMessage handleClose={props.onClose} />
      )}
      {registerStep !== 3 && (
        <ToggleAuthForm onClick={props.onToggleFormClick} />
      )}
    </>
  );
};

export default Register;
