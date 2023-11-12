import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// 1 аргумент - стейт из store, 2 аргумент - action из store

export default function useModal(showModal, setShowModal) {
  const dispatch = useDispatch();
  const _handleOverlay = (evt) => {
    if (evt.target.classList.contains('use-modal')) {
      dispatch(setShowModal(false));
    }
  };

  const _handleEscape = (evt) => {
    if (evt.key === 'Escape') {
      dispatch(setShowModal(false));
    }
  };

  function _setListeners() {
    document.addEventListener('keydown', _handleEscape);
    document.addEventListener('mousedown', _handleOverlay);
  }

  function _removeListeners() {
    document.removeEventListener('keydown', _handleEscape);
    document.removeEventListener('mousedown', _handleOverlay);
  }

  useEffect(() => {
    if (showModal) _setListeners();
    return () => _removeListeners();
  }, [showModal]);
}
