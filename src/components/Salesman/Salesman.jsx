import { React, useState } from 'react';
import './Salesman.css';
import SellerInfo from '../SellerInfo/SellerInfo';
import Contacts from '../info/Contacts/Contacts';
import AuthModal from '../auth/AuthModal/AuthModal';

const Salesman = (props) => {
  const [isPopupRegisterOpen, setIsPopupRegisterOpen] = useState(false);
  const handleRegister = () => {
    setIsPopupRegisterOpen(true);
  };
  const handleCloseModal = () => {
    setIsPopupRegisterOpen(false);
  };

  return (
    <div>
      <SellerInfo onRegister={handleRegister} />
      <Contacts />
      <div
        className={`seller__popup ${
          isPopupRegisterOpen ? 'seller__popup_opened' : ''
        }`}
      >
        <AuthModal
          onClose={handleCloseModal}
          cbLogIn={props.cbLogIn}
          cbRegister={props.cbRegister}
        />
      </div>
    </div>
  );
};

export default Salesman;
