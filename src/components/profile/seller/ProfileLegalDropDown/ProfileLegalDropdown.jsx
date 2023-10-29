/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import './ProfileLegalDropdown.css';
// import Input from '../../../Input';
// import ProfileFormButtons from '../../user/ProfileFormButtons';

// import { useFormWithValidation } from '../../../../hooks/useFormWithValidation';

// import getChangedData from '../../../../utils/getChangedData';

function ProfileLegalDropdown(props) {
  // const { values, setValues, onBlur, handleChange, errors, resetForm } =
  //   useFormWithValidation();
  // const [isEditing, setIsEditing] = useState(false);
  // const [userphoto, setUserphoto] = useState(null);
  // const [isHint, setIsHint] = useState(false);
  // const [value, setValue] = useState('');
  // const [organization, setOrganization] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(0);

  const dropdownListClick = (index) => {
    setDropdown(index);
  };

  function handleChangeList(evt) {
    // setValue(evt.target.values);
    props.setValue(evt);
  }

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
    <li className='profile__inputs-list'>
      <div className={`showcase__dropdown `}>
        <button
          onClick={() => handleOpen()}
          type='button'
          className='dropdown__button'
          // value={props.value}
        >
          {props.dropdown[dropdown].title}
          <span className='dropdown__button-icon'></span>
          {props.hint && <span className='input__hint'></span>}
        </button>
        {open ?
          <ul
            className={`dropdown__list ${open && 'dropdown_is-open'}`}
            // className='dropdown__list'
            onClick={(e) => {
              handleOverlay(e);
            }}
          >
            {props.organization ?
              props.dropdown.map((type, b) => (
                <li className='dropdown__item' key={b} onClick={() => dropdownListClick(b)} value={type.title}>
                  <div>{type.title}</div>
                  <span>{type.fullTitle}</span>
                </li>))
              :
              props.dropdown.map((bank, b) => (
                <li className='dropdown__item' key={b} onClick={() => dropdownListClick(b)} value={bank.title}>
                  {bank.title}
                </li>))}
          </ul>
          : null}
      </div>
    </li>
  );
}

export default ProfileLegalDropdown;