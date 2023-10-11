import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import ToggleAuthForm from '../ToggleAuthForm/ToggleAuthForm';
import { ReactComponent as Eye } from '../../../images/eye1.svg';
import RegisterSuccessMessage from '../RegisterSuccessMessage/RegisterSuccessMessage';
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateName,
} from '../../../utils/validation';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [surname, setSurname] = useState('');
  const [surnameError, setSurnameError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [registerStep, setRegisterStep] = useState(1);

  const handleStepOne = (e) => {
    e.preventDefault();
    const { userType, rememberMe } = props;
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
    setRegisterStep(2);
  };

  const handleSubmit = (e) => {
    const formData = JSON.parse(localStorage.getItem('registerFormData'));
    e.preventDefault();
    formData.phone = phone;
    formData.password = password;
    formData.confirmPassword = confirmPassword;
    console.log(formData);
    localStorage.removeItem('registerFormData');
    setRegisterStep(3);

    // if (!isLogin) {
    //   formData.confirmPassword = confirmPassword;
    // }

    // Отправить formData на сервер
  };
  return (
    <>
      {registerStep === 1 || registerStep === 2 ? (
        <AuthForm
          userType={props.userType}
          setUserType={props.setUserType}
          rememberMe={props.rememberMe}
          setRememberMe={props.setRememberMe}
          handleSubmit={
            (registerStep === 1 && handleStepOne) ||
            (registerStep === 2 && handleSubmit)
          }
          isLogin={props.isLogin}
          registerStep={registerStep}
        >
          {registerStep === 1 && (
            <>
              <AuthInput
                htmlFor='name'
                id='name'
                type='text'
                error={nameError}
                value={name}
                onChange={(e) => {
                  const val = e.target.value;
                  setName(val);
                  setNameError(validateName(val));
                }}
                onBlur={() => setName(name.trim())}
                inputName='Имя'
                placeholder='Иван'
              ></AuthInput>
              <AuthInput
                htmlFor='surname'
                id='surname'
                type='text'
                error={surnameError}
                value={surname}
                onChange={(e) => {
                  const val = e.target.value;
                  setSurname(val);
                  setSurnameError(validateName(val));
                }}
                onBlur={() => setSurname(surname.trim())}
                inputName='Фамилия'
                placeholder='Иванов'
              ></AuthInput>
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
                placeholder='example@mail.ru'
              />
            </>
          )}
          {registerStep === 2 && (
            <>
              <AuthInput
                htmlFor='phone'
                id='phone'
                type='tel'
                error={phoneError}
                value={phone}
                onChange={(e) => {
                  const val = e.target.value;
                  setPhone(val);
                  setPhoneError(validateName(val));
                }}
                onBlur={() => setPhone(phone.trim())}
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
              <AuthInput
                htmlFor='confirmPassword'
                id='confirmPassword'
                type={showConfirmPassword ? 'text' : 'password'}
                error={confirmPasswordError}
                value={confirmPassword}
                onChange={(e) => {
                  const val = e.target.value;
                  setConfirmPassword(val);
                  setConfirmPasswordError(
                    validateConfirmPassword(val, password)
                  );
                }}
                onBlur={() => setConfirmPassword(confirmPassword.trim())}
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
      {registerStep !== 3 && (
        <ToggleAuthForm
          isLogin={props.isLogin}
          onClick={props.onToggleFormClick}
        />
      )}
    </>
  );
};

export default Register;
