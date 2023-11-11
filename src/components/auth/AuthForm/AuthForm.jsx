import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RegisterStepsScale from '../RegisterStepsScale/RegisterStepsScale';
import AuthCheckbox from '../AuthCheckbox/AuthCheckbox';
import './AuthForm.css';
import { getUserData } from '../../../store';
import { setAuthErrorMessage } from '../../../store/actions';

const AuthForm = ({ children, ...props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthErrorMessage(''));
  }, []);

  const location = useLocation();
  const { registerStep, isLoginModal, authErrorMessage } =
    useSelector(getUserData);

  const buttonSubmitText = isLoginModal
    ? 'Войти'
    : (registerStep === 1 && 'Далее') ||
      (registerStep === 2 && 'Зарегистрироваться');

  return (
    <>
      {!isLoginModal && <RegisterStepsScale registerStep={registerStep} />}
      <form className='modal__form' noValidate>
        <div
          className={`modal__inputs ${
            !isLoginModal && registerStep === 1
              ? 'modal__inputs_type_register'
              : ''
          }`}
        >
          {children}
          {isLoginModal ? (
            <AuthCheckbox
              checkboxType='remember-me'
              isCheckboxChecked={props.isCheckboxChecked}
              setIsCheckboxChecked={props.setIsCheckboxChecked}
            />
          ) : (
            registerStep === 2 && (
              <AuthCheckbox
                checkboxType='privacy-policy'
                isCheckboxChecked={props.isCheckboxChecked}
                setIsCheckboxChecked={props.setIsCheckboxChecked}
              />
            )
          )}
        </div>
        <span className='modal__query-error'>{authErrorMessage}</span>
        <button
          className='modal__button_type_submit'
          type='submit'
          onClick={props.handleSubmit}
          disabled={
            !props.isValid || (registerStep === 2 && !props.isCheckboxChecked)
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
