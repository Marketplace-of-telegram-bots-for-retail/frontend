import React, { useState } from 'react';
import './index.css';
import InputEye from './InputEye';
import InputExpandPassword from './InputExpandPassword';
import spanInputMessages from '../../constants/spanInputMessages';

export default function Input(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };
  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };
  return (
    <label htmlFor={props.name} className='input'>
      <span className='input__name'>{props.inputName}</span>
      <input
        id={props.name}
        name={props.name}
        className={`input__input ${
          props.error || props.queryMessage ? 'input__input_type_error' : ''
        }`}
        type={showPassword ? 'text' : props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder ? props.placeholder : ''}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        required={props.required}
      ></input>
      {props.hint && (
        <div
          className='input__hint'
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          {showToolTip && <div className='input__tooltip'>{props.text}</div>}
        </div>
      )}
      <span
        className={`input__message ${
          props.error ? 'input__message_type_error' : 'input__message_type_hint'
        }`}
      >
        {props.error
          ? props.error
          : Object.keys(spanInputMessages).includes(props.name) &&
            spanInputMessages[props.name]}
      </span>
      {props.type === 'password' &&
        props.name !== 'passwordWithoutEye' &&
        (props.name === 'passwordWithExpand' ? (
          <InputExpandPassword />
        ) : (
          <InputEye
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        ))}
    </label>
  );
}
