import React from 'react';
import './LegalDataEdit.css';

function LegalDataEdit() {
  return (
    <div className='profile__legal-edit'>
      <span className='profile__legal-edit-img'></span>
      <p className='profile__legal-edit-info'>
        Для смены реквизитов напишите в&nbsp;
        <a className='profile__legal-edit-link' href='/return'>Службу поддержки&nbsp;</a>
        или на&nbsp;
        <a className='profile__legal-edit-link' href='/return'>seller@botmarketplace.ru</a>
      </p>
    </div>
  );
}

export default LegalDataEdit;
