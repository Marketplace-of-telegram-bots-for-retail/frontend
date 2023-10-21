import React from 'react';
import './index.css';

export default function ToggleUserTypeButton(props) {
  return (
    <button
      type='button'
      className='profile__button profile__button_type_toggle-usertype button'
      onClick={() => {
        props.userType === 'Покупатель'
          ? props.setUserType('Продавец')
          : props.setUserType('Покупатель');
      }}
    >
      {props.userType}
    </button>
  );
}
