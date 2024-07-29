import Button from '../button/Button';
import styles from './modal.module.scss';

const Modal = ({
  operation,
  confirm,
  cancel,
}: {
  operation: string | null;
  confirm: (operation: string | null) => void;
  cancel: () => void;
}) => {
  const getModalMessage = (operation: string | null) => {
    switch (operation) {
      case 'deleteRow':
        return 'Вы уверены, что хотите удалить эту строку?';
      case 'editRow':
        return 'Вы уверены, что хотите изменить эту строку?';
      case 'addRow':
        return 'Вы уверены, что хотите добавить новую строку?';
      default:
        return '';
    }
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p className={styles.text}>{getModalMessage(operation)}</p>
        <div className={styles.wrapperButtons}>
          <Button
            className="button button-confirm"
            onClick={() => confirm(operation)}
          >
            Да
          </Button>
          <Button className="button button-cancel" onClick={cancel}>
            Нет
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
