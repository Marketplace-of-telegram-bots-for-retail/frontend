/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import './ProfileLegalDropdown.css';

function ProfileLegalDropdown(props) {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(0);

  const dropdownListClick = (index) => {
    setDropdown(index);
  };

  // function handleChangeList(evt) {
  //   // setValue(evt.target.values);
  //   props.setValue(evt);
  // }

  function handleOpen() {
    setOpen(!open);
  }

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleOpen();
    }
    handleOpen();
  };

  return (
    <div className='profile-legal-form__dropdown'>
      <span className='profile-legal-form__dropdown-input input__name'>{props.inputName}</span>
      <div className='profile-legal-form__dropdown-container' onClick={() => handleOpen()}>
        <button
          // onClick={() => handleOpen()}
          type='button'
          className='profile-legal-form__dropdown-button'
          // value={props.value}
        >
          {props.dropdown[dropdown].title}
        </button>
        <div className='profile-legal-form__dropdown-button-container'>
          <div className='profile-legal-form__dropdown-button-icon'></div>
          {props.hint && <div className='profile-legal-form__dropdown-button-hint'></div>}
        </div>
        {open ?
          <ul
            className={`profile-legal-form__dropdown-list ${open && 'dropdown_is-open'}`}
            onClick={(e) => {
              handleOverlay(e);
            }}
          >
            {props.organization ?
              props.dropdown.map((type, i) => (
                <li className='profile-legal-form__dropdown-list-item' key={i} onClick={() => dropdownListClick(i)} value={type.title}>
                  <div className='profile-legal-form__dropdown-list-item-title'>{type.title}</div>
                  <span className='profile-legal-form__dropdown-list-item-subtitle'>{type.fullTitle}</span>
                  {props.dropdown[dropdown].title === type.title && <span className='profile-legal-form__dropdown-list-item-icon'></span>}
                </li>))
              :
              props.dropdown.map((bank, i) => (
                <li className='profile-legal-form__dropdown-list-item' key={i} onClick={() => dropdownListClick(i)} value={bank.title}>
                  <div className='profile-legal-form__dropdown-list-item-title'>{bank.title}</div>
                  {props.dropdown[dropdown].title === bank.title && <span className='profile-legal-form__dropdown-list-item-icon'></span>}
                </li>))}
          </ul>
          : null}
      </div>
    </div>
  );
}

export default ProfileLegalDropdown;