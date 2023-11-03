import React from 'react';
import './index.css';

export default function ProfileFormButtons(props) {
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
            onClick={() => props.setIsEditing(false)}
          >
            Отменить
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
