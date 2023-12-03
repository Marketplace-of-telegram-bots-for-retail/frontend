/* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function LegalCheckboxAgreement(props) {
  return (
    <>
      <div
        className={`profile__legal-container ${
          props.isEditing ? 'profile__legal-container_hidden' : ''
        } `}
      >
        <input
          className='profile__legal-input'
          type='checkbox'
          onChange={props.onChange}
          name={props.name}
          error={props.error}
          required
        ></input>
        <div>
          <label
            htmlFor='legal-checkbox'
            className='profile__legal-checkbox-label'
          >
            Я принимаю условия&nbsp;
            <Link to='/contract' className='profile__legal-link'>
              Договора-оферты
            </Link>
          </label>
        </div>
      </div>
      <span
        className={`profile__legal-message ${
          props.error ? 'profile__legal-message_type_error' : 'profile__legal-message_type_hint'
        }`}
      >
        {props.error}
      </span>
    </>
  );
}

export default LegalCheckboxAgreement;
