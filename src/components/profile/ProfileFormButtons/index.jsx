import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function ProfileFormButtons(props) {
  const navigate = useNavigate();
  return (
    <div className='profile__form-buttons profile__form-buttons_type_edit'>
      {props.isEditing ? (
        <>
          <button type='submit' className='profile__form-button button button_color_blue' onClick={props.handleSubmit}>
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
        <>
          <button
            type='button'
            className='profile__form-button button button_color_transparent'
            onClick={() => {
              props.cbLogout();
              navigate('/');
            }}
          >
            Выйти&#160;из&#160;профиля
          </button>
          <button
            type='button'
            className='profile__form-button button'
            onClick={(e) => {
              e.preventDefault();
              props.setIsEditing(true);
            }}
          >
            Редактировать&#160;профиль
          </button>
        </>
      )}
    </div>
  );
}
