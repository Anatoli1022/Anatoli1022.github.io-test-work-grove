import React from 'react';
import Cell from '../cell/Cell';
import Button from '../../button/Button';
import './row.module.scss';

interface RowProps {
  row: { title: string; cells: boolean[] };
  onEdit: () => void;
  onDelete: () => void;
}

const Row: React.FC<RowProps> = ({ row, onDelete, onEdit }) => (
  <tr>
    <td>
      <Button className="button button-standard" onClick={onEdit}>
        Редактировать
      </Button>
      <Button className="button button-standard" onClick={onDelete}>
        Удалить
      </Button>
    </td>
    <td>{row.title}</td>
    {row.cells.map((cell, cellIndex) => (
      <Cell key={cellIndex} value={cell} />
    ))}
  </tr>
);

export default Row;
