import { useSelector } from 'react-redux';
import useModal from './useModal';
import { getModals } from '../store';
import {
  setShowLogoutModal,
  setShowDeleteProfileModal,
  setShowResetSellerDataFormModal,
} from '../store/modalsSlice';

export default function useHookUpModals() {
  const {
    showLogoutModal,
    showDeleteProfileModal,
    showResetSellerDataFormModal,
  } = useSelector(getModals);

  useModal(showLogoutModal, setShowLogoutModal);
  useModal(showDeleteProfileModal, setShowDeleteProfileModal);
  useModal(showResetSellerDataFormModal, setShowResetSellerDataFormModal);
}
