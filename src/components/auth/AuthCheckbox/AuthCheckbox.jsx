import React from 'react';
import { Link } from 'react-router-dom';

const AuthCheckbox = ({
  checkboxType,
  isCheckboxChecked,
  setIsCheckboxChecked,
  errorCheckbox,
  setErrorCheckbox,
}) => {
  return (
    <div className='modal__remember-checkbox'>
      <button
        type='button'
        className={`modal__remember-icon ${
          isCheckboxChecked ? 'modal__remember-icon_checked' : ''
        }
        ${
          errorCheckbox
            ? 'modal__remember-icon_error'
            : 'modal__remember-icon_blank'
        }`}
        onClick={() => {
          errorCheckbox && setErrorCheckbox(!errorCheckbox);
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
