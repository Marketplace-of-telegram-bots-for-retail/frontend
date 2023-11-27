import React from 'react';

function LegalDocumentButton(props) {
  function handleAddProve() {
    props.handleAddProve();
  }

  return (
    <button
      className={`profile__legal-add-button ${props.isEditing ? 'profile__legal-add-button_hidden' : ''} `}
      type='button'
      onClick={handleAddProve}
    >
      <div className='profile__legal-add-image'></div>
      <p className='profile__legal-add-text'>Загрузить документы</p>
    </button>
  );
}

export default LegalDocumentButton;
