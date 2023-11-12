import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import Modal from '..';
import Input from '../../Input';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import { setAuthErrorMessage } from '../../../store/actions';
import { getUserData, getModals } from '../../../store';

export default function ConfirmDeleteProfileModal({ onClose, deleteProfile }) {
  const dispatch = useDispatch();
  const { values, onBlur, handleChange, errors, isValid } =
    useFormWithValidation();
  const { authErrorMessage } = useSelector(getUserData);
  const { showDeleteProfileModal } = useSelector(getModals);

  const handleInput = (e) => {
    handleChange(e);
    if (authErrorMessage !== '') dispatch(setAuthErrorMessage(''));
  };
  return (
    <Modal
      showModal={showDeleteProfileModal}
      onClose={onClose}
      closeButtonClass='modal__close-button modal__close-button_type_confirm'
      showCloseButton
    >
      <h2 className='modal__title modal__title_type_confirm-delete-profile'>
        Удаление аккаунта
      </h2>
      <form noValidate>
        <Input
          name='password'
          type='password'
          error={errors.password}
          value={values.password ?? ''}
          onChange={handleInput}
          onBlur={onBlur}
          inputName='Пароль'
          placeholder='введите пароль'
          required
        />
        <span className='modal__delete-profile-warning'>
          Это действие невозможно будет отменить.
        </span>
        <span className='modal__query-error'>{authErrorMessage}</span>
        <div className='modal__buttons-container modal__buttons-container_type_confirm'>
          <button
            type='button'
            className='button button_color_transparent-red'
            disabled={!isValid}
            onClick={() => {
              deleteProfile(values.password);
            }}
          >
            Удалить
          </button>
          <button
            type='button'
            className='button button_color_blue'
            onClick={onClose}
          >
            Отменить
          </button>
        </div>
      </form>
    </Modal>
  );
}
