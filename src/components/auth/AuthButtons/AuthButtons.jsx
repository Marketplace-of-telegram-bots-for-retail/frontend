import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AuthButtons.css';
import AuthModal from '../AuthModal/AuthModal';
import { ReactComponent as Triangle } from '../../../images/triangle.svg';
import { setIsLoginModal } from '../../../store/dataAuthorisation';

const AuthButtons = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    props.setShowAuthButtons(false);
    props.setShowAuthModal(false);
    navigate('/', { replace: true });
  };
  const handleClickButton = (stateButton) => {
    // stateButton - true for login, false for signup
    dispatch(setIsLoginModal(stateButton));
    props.setShowAuthModal(true);
    // закрываем предыдущий попап
    props.setShowAuthButtons(false);
  };

  return !props.showAuthModal ? (
    !props.isAuthorized && (
      <div
        className='auth-buttons page__modal modal'
        onClick={() => {
          props.setShowAuthButtons(true);
        }}
      >
        <div className='auth-buttons__container'>
          <Triangle className='auth-buttons__triangle' />
          <button
            className='auth-buttons__button auth-buttons__button_accent'
            type='button'
            onClick={() => {
              handleClickButton(true);
              // setIsLogin(true);
              // props.setShowAuthModal(true);
            }}
          >
            Войти
          </button>
          <button
            className='auth-buttons__button'
            type='button'
            onClick={() => {
              handleClickButton(false);
              // setIsLogin(false);
              // props.setShowAuthModal(true);
            }}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    )
  ) : (
    <AuthModal
      onClose={handleCloseModal}
      cbLogIn={props.cbLogIn}
      cbRegister={props.cbRegister}
      queryMessage={props.queryMessage}
      setQueryMessage={props.setQueryMessage}
    />
  );
};

export default AuthButtons;
