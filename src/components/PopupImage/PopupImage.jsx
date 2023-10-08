import React from 'react';
import { usePopupClose } from '../../hooks/usePopupClose';

function PopupImage({ selectedCard }) {
  usePopupClose(selectedCard);
  return (
    <div className={`popup popup_type_picture ${selectedCard && 'popup_opened'}`}>
      <div className="popup__modal-img">
        <div className="popup__container-img popup__form" id="popup__container-img" name="myPhotos" method="post">
          <img
            className="popup__place-image"
            src={selectedCard}
            alt={selectedCard}
          />
        </div>
      </div>
    </div>
  );
}

export default PopupImage;