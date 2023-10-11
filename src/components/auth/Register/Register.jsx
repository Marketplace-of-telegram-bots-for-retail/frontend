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

  const { values, handleChange, errors } = useFormWithValidation();

  const handleStepOne = (e) => {
    e.preventDefault();
    const { userType, rememberMe } = props;
    const { name, surname, email } = values;
    localStorage.setItem(
      'registerFormData',
      JSON.stringify({
        userType,
        rememberMe,
        name,
        surname,
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
    formData.confirmPassword = confirmPassword;
    console.log(formData);
    localStorage.removeItem('registerFormData');
    props.setRegisterStep(3);

    // if (!isLogin) {
    //   formData.confirmPassword = confirmPassword;
    // }
  };
  return (
    <>
      {props.registerStep === 1 || props.registerStep === 2 ? (
        <AuthForm
          userType={props.userType}
          setUserType={props.setUserType}
          rememberMe={props.rememberMe}
          setRememberMe={props.setRememberMe}
          handleSubmit={
            (props.registerStep === 1 && handleStepOne) ||
            (props.registerStep === 2 && handleSubmit)
          }
          isLogin={props.isLogin}
          registerStep={props.registerStep}
        >
          {props.registerStep === 1 && (
            <>
              <AuthInput
                htmlFor='name'
                name='name'
                type='text'
                error={errors.name}
                value={values.name ?? ''}
                onChange={handleChange}
                // onBlur={() => setName(name.trim())}
                onBlur={() => console.log('')}
                inputName='Имя'
                placeholder='Иван'
              ></AuthInput>
              <AuthInput
                htmlFor='surname'
                name='surname'
                type='text'
                error={errors.surname}
                value={values.surname ?? ''}
                onChange={handleChange}
                // onBlur={() => setSurname(surname.trim())}
                inputName='Фамилия'
                placeholder='Иванов'
              ></AuthInput>
              <AuthInput
                htmlFor='email'
                name='email'
                type='email'
                error={errors.email}
                value={values.email ?? ''}
                onChange={handleChange}
                // onBlur={() => setEmail(email.trim())}
                onBlur={() => console.log('')}
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
                onChange={handleChange}
                // onBlur={() => setPhone(phone.trim())}
                inputName='Телефон'
              >
                <span className='modal__phone-span'>+7</span>
              </AuthInput>
              <AuthInput
                htmlFor='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                error={errors.password}
                value={values.password ?? ''}
                onChange={handleChange}
                // onBlur={() => setPassword(password.trim())}
                onBlur={() => console.log('')}
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
                onChange={handleChange}
                // onBlur={() => setConfirmPassword(confirmPassword.trim())}
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
