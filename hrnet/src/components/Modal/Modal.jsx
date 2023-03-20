import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.scss';
import { useState } from 'react';

export function Modal({ closeModal }) {
  const [showModal, setShowModal] = useState(true);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
      closeModal();
    }
  };
  return (
    <>
      {showModal && (
        <div className={styles.containerModal} onClick={handleClickOutside}>
          <div className={styles.modal}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={styles.closeModal}
              onClick={() => {
                setShowModal(false);
                closeModal();
              }}
            />
            <span>Employee Created !</span>
          </div>
        </div>
      )}
    </>
  );
}
