import React from 'react';
import './AuthInput.css';

const AuthInput = ({ children, ...props }) => {
  return (
    <label htmlFor={props.htmlFor} className='modal__label'>
      {children}
      <span className='modal__input-name'>{props.inputName}</span>
      <input
        name={props.name}
        className={`modal__input ${
          props.error || props.queryMessage
            ? 'modal__input_type_error'
            : 'modal__input_type_valid'
        }`}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder ? props.placeholder : ''}
        autoFocus={props.autoFocus}
        required={props.required}
      />
      {props.error && (
        <span className='modal__error-message'>{props.error}</span>
      )}
    </label>
  );
};

export default AuthInput;
