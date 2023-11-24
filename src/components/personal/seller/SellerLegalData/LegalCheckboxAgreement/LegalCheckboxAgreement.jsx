import React, { useState } from 'react';

function LegalCheckboxAgreement(props) {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <div className={`profile__legal-container ${props.isEditing ? 'profile__legal-container_hidden' : ''} `}>
      <input
        className='profile__legal-input'
        type='checkbox'
        id='legal-checkbox'
        checked={isCheckboxChecked}
        onChange={handleCheckboxChange}
      ></input>
      <div>
        <label
          htmlFor='legal-checkbox'
          className='profile__legal-checkbox-label'
        >
          Я принимаю условия&nbsp;
          {/* <Link to='/contract' className='profile__legal-link'>
            Договора-оферты
          </Link> */}
        </label>
      </div>
    </div>
  );
}

export default LegalCheckboxAgreement;
