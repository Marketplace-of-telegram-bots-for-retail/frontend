import React from 'react';
import { Link } from 'react-router-dom';
import './AuthCheckbox.css';

const AuthCheckbox = ({
  checkboxType,
  isCheckboxChecked,
  setIsCheckboxChecked,
}) => {
  return (
    <div className='modal__checkbox'>
      <button
        type='button'
        className={`modal__icon ${
          isCheckboxChecked
            ? 'modal__icon_type_checked'
            : 'modal__icon_type_blank'
        }`}
        onClick={() => {
          setIsCheckboxChecked(!isCheckboxChecked);
        }}
      />
      {checkboxType === 'privacy-policy' && (
        <span className='modal__span modal__span_type_policy'>
          Согласен с
          <Link
            to='/privacy-policy'
            target='_blank'
            className='modal__span modal__span_link modal__span_type_policy-link'
          >
            Политикой Конфиденциальности
          </Link>
        </span>
      )}
      {checkboxType === 'remember-me' && (
        <span className='modal__span'>Запомнить меня</span>
      )}
    </div>
  );
};

export default AuthCheckbox;
