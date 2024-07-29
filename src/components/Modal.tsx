import '../styles/modal.css';
import '../styles/buttons.css';

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
          <button
            className="button button-confirm"
            onClick={() => confirm(operation)}
          >
            Да
          </button>
          <button className="button button-cancel" onClick={cancel}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
