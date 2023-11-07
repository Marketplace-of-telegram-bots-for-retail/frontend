import React from 'react';
import './index.css';
import { useLocation } from 'react-router-dom';

export default function ProfileFormButtons(props) {
  const location = useLocation();
  return (
    <div className='profile__form-buttons profile__form-buttons_type_edit'>
      {props.isEditing ? (
        <>
          <button
            type='submit'
            className='profile__form-button button button_color_blue'
            onClick={props.handleSubmit}
          >
            Сохранить
          </button>
          <button
            type='button'
            className='profile__form-button button button_color_transparent'
            onClick={location.pathname === '/personal/seller/legal-data/' ?
              () => {
                props.resetForm();
              } :
              (e) => {
                e.preventDefault();
                props.setIsEditing(false);
              }}
          >
            {location.pathname === '/personal/seller/legal-data/' ? 'Очистить' : 'Отменить'}
          </button>
        </>
      ) : (
        <button
          type='button'
          className='profile__form-button button button_color_transparent'
          onClick={(e) => {
            e.preventDefault();
            props.setIsEditing(true);
          }}
        >
          Редактировать
        </button>
      )}
    </div>
  );
}
