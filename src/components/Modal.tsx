import '../styles/modal.css';

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
      <p>{getModalMessage(operation)}</p>
      <button onClick={() => confirm(operation)}>Да</button>
      <button onClick={cancel}>Нет</button>
    </div>
  );
};

export default Modal;
