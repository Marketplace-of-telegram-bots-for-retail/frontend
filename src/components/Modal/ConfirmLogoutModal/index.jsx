import React from 'react';
import { useNavigate } from 'react-router';
import Modal from '..';
import './index.css';

export default function ConfirmLogoutModal({ onClose, logout }) {
  const navigate = useNavigate();
  return (
    <Modal
      onClose={onClose}
      closeButtonClass='modal__close-button_type_confirm-logout'
    >
      <h2 className='modal__title_type_confirm-logout'>
        Вы уверены, что хотите выйти из аккаунта?
      </h2>
      <div className='modal__buttons-container_type_confirm-logout'>
        <button
          type='button'
          className='button button_color_transparent'
          onClick={onClose}
        >
          Отменить
        </button>
        <button
          type='button'
          className='button button_color_blue'
          onClick={() => {
            logout();
            navigate('/');
          }}
        >
          Выйти
        </button>
      </div>
    </Modal>
  );
}
