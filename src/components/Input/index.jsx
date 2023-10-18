import React from 'react';
import './index.css';

export const Input = ({ children, ...props }) => {
  return (
    <label htmlFor={props.htmlFor} className='input'>
      {children}
      <span className='input__name'>{props.inputName}</span>
      <input
        name={props.name}
        className={`input__input ${
          props.error || props.queryMessage ? 'input__input_type_error' : ''
        }`}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder ? props.placeholder : ''}
        autoFocus={props.autoFocus}
        required
      />
      {props.error && (
        <span className='input__error-message'>{props.error}</span>
      )}
    </label>
  );
};
