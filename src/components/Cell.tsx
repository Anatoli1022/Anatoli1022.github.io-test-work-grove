import React from 'react';

interface CellProps {
  value: boolean;
  index: number;
}

const Cell: React.FC<CellProps> = ({ index, value }) => {
  return (
    <td
      style={{
        backgroundColor: value ? 'lightgreen' : 'lightcoral',
      }}
    >
      {index}
    </td>
  );
};

export default Cell;
