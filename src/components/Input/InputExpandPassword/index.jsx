import React from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { setIsPasswordExpanded } from '../../../store/actions';

export default function InputExpandPassword() {
  const dispatch = useDispatch();
  return (
    <button
      type='button'
      className='input__expand-password-button'
      onClick={() => dispatch(setIsPasswordExpanded(true))}
    ></button>
  );
}
