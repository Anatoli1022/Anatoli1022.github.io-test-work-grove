import React from 'react';
import Cell from './Cell';

interface RowProps {
  row: { title: string; cells: boolean[] };
}

const Row: React.FC<RowProps> = ({ row }) => (
  <tr>
    <td>{row.title}</td>

    {row.cells.map((cell, cellIndex) => (
      <Cell key={cellIndex} index={cellIndex} value={cell} />
    ))}
  </tr>
);

export default Row;
