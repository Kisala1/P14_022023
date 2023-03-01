import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.scss';

export function Modal() {
  return (
    <div className={styles.containerModal}>
      <div className={styles.modal}>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.closeModal} />
        <span>Employee Created !</span>
      </div>
    </div>
  );
}
