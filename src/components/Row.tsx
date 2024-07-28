import React from 'react';
import Cell from './Cell';

interface RowProps {
  row: { title: string; cells: boolean[] };
  onEdit: () => void;
  onDelete: () => void;
}

const Row: React.FC<RowProps> = ({ row, onDelete, onEdit }) => (
  <tr>
    <td>
      <button onClick={onEdit}>Редактировать</button>
      <button onClick={onDelete}>Удалить</button>
    </td>
    <td>{row.title}</td>
    {row.cells.map((cell, cellIndex) => (
      <Cell key={cellIndex} index={cellIndex} value={cell} />
    ))}
  </tr>
);

export default Row;
