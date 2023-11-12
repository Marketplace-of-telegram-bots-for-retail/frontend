import React from 'react';
import './index.css';
import { ReactComponent as Close } from '../../images/close-icon.svg';

// модалка с затемненным фоном.
// children - вложенные элементы
// showModal - стейт модалки
// onClose - что происходит при закрытии модалки
// опциональный пропс, если true то отрисуется крестик закрытия
// опциональный пропс, принимает класс кнопки (если отличается по размерам итд)

export default function Modal({
  children,
  showModal,
  onClose,
  showCloseButton,
  closeButtonClass,
}) {
  return (
    showModal && (
      <div className='modal use-modal'>
        <div className='modal__container'>
          {children}
          {showCloseButton && (
            <Close
              className={`modal__close-button ${
                closeButtonClass !== undefined ? closeButtonClass : ''
              }`}
              onClick={onClose}
            />
          )}
        </div>
      </div>
    )
  );
}
