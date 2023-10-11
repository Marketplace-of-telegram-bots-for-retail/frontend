import React from 'react';

const AuthInput = ({ children, ...props }) => {
  return (
    <label htmlFor={props.htmlFor} className='modal__label'>
      {children}
      <span className='modal__input-name'>{props.inputName}</span>
      <input
        name={props.name}
        className={`modal__input ${
          props.error ? 'modal__input_error' : 'modal__input_valid'
        }`}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder ? props.placeholder : ''}
      />
      {props.error && (
        <span className='modal__error-message'>{props.error}</span>
      )}
    </label>
  );
};

export default AuthInput;
