import Button from '../button/Button';
import './modal.module.scss';

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
    <div className="modal">
      <div className="modal-content">
        <p className="text">{getModalMessage(operation)}</p>
        <div className="wrapper-buttons">
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
