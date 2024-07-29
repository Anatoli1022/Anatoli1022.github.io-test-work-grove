import React from 'react';
import Cell from './Cell';
import '../styles/buttons.css';

interface RowProps {
  row: { title: string; cells: boolean[] };
  onEdit: () => void;
  onDelete: () => void;
}

const Row: React.FC<RowProps> = ({ row, onDelete, onEdit }) => (
  <tr>
    <td>
      <button className="button button-standard" onClick={onEdit}>
        Редактировать
      </button>
      <button className="button button-standard" onClick={onDelete}>
        Удалить
      </button>
    </td>
    <td>{row.title}</td>
    {row.cells.map((cell, cellIndex) => (
      <Cell key={cellIndex} value={cell} />
    ))}
  </tr>
);

export default Row;
