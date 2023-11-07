import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '..';
import './index.css';
import { getAuthorisationData } from '../../../store';

export default function ConfirmLogoutModal({ onClose, logout }) {
  const { authErrorMessage } = useSelector(getAuthorisationData);
  return (
    <Modal
      onClose={onClose}
      closeButtonClass='modal__close-button modal__close-button_type_confirm'
    >
      <h2 className='modal__title modal__title_type_confirm-logout'>
        Вы уверены, что хотите выйти из аккаунта?
      </h2>
      <span className='modal__query-error'>{authErrorMessage}</span>
      <div className=' modal__buttons-container modal__buttons-container_type_confirm'>
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
          onClick={() => logout()}
        >
          Выйти
        </button>
      </div>
    </Modal>
  );
}
