import React, { useEffect } from 'react';
import RegisterStepsScale from '../RegisterStepsScale/RegisterStepsScale';
import AuthCheckbox from '../AuthCheckbox/AuthCheckbox';
import './AuthForm.css';

const AuthForm = ({ children, ...props }) => {
  useEffect(() => props.setQueryMessage(''), []);
  return (
    <>
      {!props.isLogin && (
        <RegisterStepsScale registerStep={props.registerStep} />
      )}
      <form className='modal__form' noValidate>
        <div className='modal__inputs'>
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
                errorCheckbox={props.errorCheckbox}
                setErrorCheckbox={props.setErrorCheckbox}
              />
            )
          )}
        </div>
        <span className='modal__query-error'>
          {props.queryMessage !== '' ? props.queryMessage : props.errorMessage}
        </span>
        <button
          className='modal__button_type_submit'
          type='submit'
          onClick={props.handleSubmit}
          disabled={!props.isValid}
        >
          {props.isLogin
            ? 'Войти'
            : (props.registerStep === 1 && 'Далее') ||
              (props.registerStep === 2 && 'Зарегистрироваться')}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
