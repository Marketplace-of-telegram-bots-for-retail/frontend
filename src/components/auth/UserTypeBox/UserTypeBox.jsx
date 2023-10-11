import React from 'react';

const UserTypeBox = (props) => {
  return (
    <div className='modal__user-type-box'>
      <button
        className={`modal__user-type-btn ${
          props.userType === 'Покупатель'
            ? 'modal__user-type-btn_active'
            : 'modal__user-type-btn_inactive'
        }`}
        type='button'
        onClick={() => props.setUserType('Покупатель')}
      >
        Покупатель
      </button>
      <button
        className={`modal__user-type-btn ${
          props.userType === 'Продавец'
            ? 'modal__user-type-btn_active'
            : 'modal__user-type-btn_inactive'
        }`}
        type='button'
        onClick={() => props.setUserType('Продавец')}
      >
        Продавец
      </button>
    </div>
  );
};

export default UserTypeBox;
