import React from 'react';
import './index.css';
import { ReactComponent as Close } from '../../images/close-icon.svg';

// модалка с затемненным фоном.
// принимает вложенные в нее элементы и изменение стейта открытия модального окна на false (например setShowModal(false))
// опционально принимает дополнительный класс крестика закрытия, в случае если изменился его размер/расположение
export default function Modal({ children, onClose, closeButtonClass }) {
  return (
    <div className='modal use-modal'>
      <div className='modal__container'>
        {children}
        <Close
          className={`modal__close-button ${closeButtonClass !== undefined ? closeButtonClass : ''}`}
          onClick={onClose}
        />
      </div>
    </div>
  );
}
