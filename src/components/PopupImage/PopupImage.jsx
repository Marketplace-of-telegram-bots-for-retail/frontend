import React from 'react';
import { usePopupClose } from '../../hooks/usePopupClose';

function PopupImage({ card }) {
  usePopupClose(card);
  return (
    <div className={`popup popup_type_picture ${card && 'popup_opened'}`}>
      <div className="popup__modal-img">
        <div className="popup__container-img popup__form" id="popup__container-img" name="myPhotos" method="post">
          <img
            className="popup__place-image"
            src={card}
            alt={card}
          />
        </div>
      </div>
    </div>
  );
}

export default PopupImage;