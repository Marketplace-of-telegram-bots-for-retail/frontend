import React from 'react';
import { useLocation } from 'react-router-dom';
import RegisterStepsScale from '../RegisterStepsScale/RegisterStepsScale';
import AuthCheckbox from '../AuthCheckbox/AuthCheckbox';
import './AuthForm.css';

const AuthForm = ({ children, ...props }) => {
  // useEffect(() => {
  //   props.setQueryMessage('');
  // }, []);

  const location = useLocation();

  const buttonSubmitText = props.isLogin
    ? 'Войти'
    : (props.registerStep === 1 && 'Далее') ||
      (props.registerStep === 2 && 'Зарегистрироваться');

  return (
    <>
      {!props.isLogin && (
        <RegisterStepsScale registerStep={props.registerStep} />
      )}
      <form className='modal__form' noValidate>
        <div
          className={`modal__inputs ${
            !props.isLogin && props.registerStep === 1
              ? 'modal__inputs_type_register'
              : ''
          }`}
        >
          {children}
          {props.isLogin ? (
            <AuthCheckbox
              checkboxType='remember-me'
              isCheckboxChecked={props.isCheckboxChecked}
              setIsCheckboxChecked={props.setIsCheckboxChecked}
            />
          ) : (
            props.registerStep === 2 && (
              <AuthCheckbox
                checkboxType='privacy-policy'
                isCheckboxChecked={props.isCheckboxChecked}
                setIsCheckboxChecked={props.setIsCheckboxChecked}
              />
            )
          )}
        </div>
        <span className='modal__query-error'>{props.queryMessage}</span>
        <button
          className='modal__button_type_submit'
          type='submit'
          onClick={props.handleSubmit}
          disabled={
            !props.isValid ||
            (props.registerStep === 2 && !props.isCheckboxChecked)
          }
        >
          {location.pathname === '/reset-password'
            ? 'Продолжить'
            : buttonSubmitText}
          {/* {props.isLogin
            ? 'Войти'
            : (props.registerStep === 1 && 'Далее') ||
              (props.registerStep === 2 && 'Зарегистрироваться')}} */}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
