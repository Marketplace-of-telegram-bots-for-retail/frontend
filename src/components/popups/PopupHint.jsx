import React from 'react';
import './PopupHint.css';
import { usePopupClose } from '../../hooks/usePopupClose';

function PopupHint({ name, isOpen, onClose, children }) {
  usePopupClose(isOpen, onClose);

  return (
    <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      {children}
    </div>
  );
}

export default PopupHint;