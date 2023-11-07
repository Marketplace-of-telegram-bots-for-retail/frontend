import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { useLocation } from 'react-router-dom';
import { setIsEditing, setIsPasswordExpanded } from '../../../../store/userSlice';
import { getUserData } from '../../../../store';

export default function ProfileFormButtons(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const { isEditing } = useSelector(getUserData);
  return (
    <div className='profile__form-buttons profile__form-buttons_type_edit'>
      {isEditing ? (
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
            onClick={
              location.pathname === '/personal/seller/legal-data/'
                ? () => props.resetForm()
                : (e) => {
                  e.preventDefault();
                  dispatch(setIsEditing(false));
                  dispatch(setIsPasswordExpanded(false));
                }
            }
          >
            {location.pathname === '/personal/seller/legal-data/'
              ? 'Очистить'
              : 'Отменить'}
          </button>
        </>
      ) : (
        <button
          type='button'
          className='profile__form-button button button_color_transparent'
          onClick={(e) => {
            e.preventDefault();
            dispatch(setIsEditing(true));
          }}
        >
          Редактировать
        </button>
      )}
    </div>
  );
}
