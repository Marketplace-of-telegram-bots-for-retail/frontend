import React from 'react';
import RegisterStepsScale from '../RegisterStepsScale/RegisterStepsScale';
import UserTypeBox from '../UserTypeBox/UserTypeBox';

const AuthForm = ({ children, ...props }) => {
  // вынести кнопки переключения покупатель/продавец в один компонент
  return (
    <>
      {(props.isLogin || props.registerStep === 1) && (
        <UserTypeBox
          userType={props.userType}
          setUserType={props.setUserType}
        />
      )}

      {!props.isLogin && (
        <RegisterStepsScale registerStep={props.registerStep} />
      )}
      <form className='modal__form'>
        <div className='modal__inputs'>
          {children}
          {props.isLogin ? (
            <div className='modal__remember-checkbox'>
              <button
                type='button'
                className={`modal__remember-icon ${
                  props.rememberMe
                    ? 'modal__remember-icon_checked'
                    : 'modal__remember-icon_blank'
                }`}
                onClick={() => props.setRememberMe(!props.rememberMe)}
              />
              <span className='modal__span'>Запомнить меня</span>
            </div>
          ) : (
            props.registerStep === 2 && (
              <div className='modal__remember-checkbox'>
                <button
                  type='button'
                  className={`modal__remember-icon ${
                    props.rememberMe
                      ? 'modal__remember-icon_checked'
                      : 'modal__remember-icon_blank'
                  }`}
                  onClick={() => props.setRememberMe(!props.rememberMe)}
                />
                <span className='modal__span modal__span_type_policy'>
                  Согласен с Политикой Конфиденциальности
                </span>
              </div>
            )
          )}
        </div>
        <button
          className='modal__submit-btn'
          type='submit'
          onClick={props.handleSubmit}
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
