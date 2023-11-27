/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from '../../../../store';

import './ProfileLegalDropdown.css';

function ProfileLegalDropdown(props) {
  const { isEditing } = useSelector(getUserData);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(0);
  const [showToolTip, setShowToolTip] = useState(false);

  const dropdownListClick = (index) => {
    setDropdown(index);
    props.onIndexChange(index);
  };

  function handleOpen() {
    setOpen(!open);
  }

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleOpen();
    }
    handleOpen();
  };

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };
  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  return (
    <div className='profile-legal-form__dropdown'>
      <span className='profile-legal-form__dropdown-input input__name'>{props.inputName}</span>
      <button
        className='profile-legal-form__dropdown-container'
        onClick={() => handleOpen()}
        type='button'
        disabled={!isEditing}
      >
        {props.dropdown[dropdown].title}
        <div className='profile-legal-form__dropdown-button-container'>
          <div className='profile-legal-form__dropdown-button-icon'></div>
          {props.hint && <div className='profile-legal-form__dropdown-button-hint' onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            {showToolTip && <div className='profile-legal-form__dropdown-button-tooltip'>{props.text}</div>}
            </div>}
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
                <li className='profile-legal-form__dropdown-list-item' key={i} onClick={() => dropdownListClick(i)} data-value={type.title}>
                  <div className='profile-legal-form__dropdown-list-item-title'>{type.title}</div>
                  <span className='profile-legal-form__dropdown-list-item-subtitle'>{type.fullTitle}</span>
                  {props.dropdown[dropdown].title === type.title && <span className='profile-legal-form__dropdown-list-item-icon'></span>}
                </li>))
              :
              props.dropdown.map((bank, i) => (
                <li className='profile-legal-form__dropdown-list-item' key={i} onClick={() => dropdownListClick(i)} data-value={bank.title}>
                  <div className='profile-legal-form__dropdown-list-item-title'>{bank.title}</div>
                  {props.dropdown[dropdown].title === bank.title && <span className='profile-legal-form__dropdown-list-item-icon'></span>}
                </li>))}
          </ul>
          : null}
      </button>
    </div>
  );
}

export default ProfileLegalDropdown;