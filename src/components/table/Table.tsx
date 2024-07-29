import React, { useEffect, useState } from 'react';
import {
  generateColumns,
  generateRows,
  addRow,
  deleteRow,
  editRow,
} from '../../lib/table';
import Row from './row/Row';
import Modal from '../modal/Modal';
import Button from '../button/Button';
import Loader from '../loader/Loader';
import './table.module.scss';

const Table: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<{ title: string; cells: boolean[] }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [rowIndex, setRowIndex] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const cols = await generateColumns();
      const rows = await generateRows(cols.length);
      setColumns(cols);
      setRows(rows);
    };

    fetchData();
  }, []);

  const handleOperationRow = ({
    index,
    operation,
  }: {
    index: number | null;
    operation: string;
  }) => {
    setRowIndex(index);
    setOperation(operation);
    setIsModalOpen(true);
  };

  const confirm = (operation: string | null) => {
    switch (operation) {
      case 'deleteRow':
        if (rowIndex !== null) {
          setRows(deleteRow(rowIndex, rows));
        }
        break;
      case 'editRow':
        if (rowIndex !== null) {
          setRows(editRow(rowIndex, rows));
        }
        break;
      case 'addRow':
        setRows(addRow({ rows, columns }));
        break;
      default:
        break;
    }
    setOperation(null);
    setIsModalOpen(false);
  };

  const cancel = () => {
    setIsModalOpen(false);
  };

  if (!rows.length) {
    return <Loader />;
  }

  return (
    <div>
      <div className="wrapper">
        <table>
          <thead>
            <tr>
              <th>
                <span className="text">Количество строк: {rows.length}</span>

                <Button
                  className="button button-standard"
                  onClick={() =>
                    handleOperationRow({ index: null, operation: 'addRow' })
                  }
                >
                  Добавить строку
                </Button>
              </th>
              <th></th>
              {columns &&
                columns.map((colum, index) => <th key={index} className='th-vertical'>{colum}</th>)}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <Row
                key={index}
                row={row}
                onDelete={() =>
                  handleOperationRow({ index, operation: 'deleteRow' })
                }
                onEdit={() =>
                  handleOperationRow({ index, operation: 'editRow' })
                }
              />
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <Modal operation={operation} confirm={confirm} cancel={cancel} />
      )}
    </div>
  );
};

export default Table;
