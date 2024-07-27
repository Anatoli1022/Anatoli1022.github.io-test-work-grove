import React, { useEffect, useState } from 'react';
import { generateColumns, generateRows } from '../utils/table';
import Row from './Row';

const Table: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<{ title: string; cells: boolean[] }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cols = await generateColumns();
      const rows = await generateRows(cols.length);
      setColumns(cols);
      setRows(rows);
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {columns &&
            columns.map((colum, index) => <th key={index}>{colum}</th>)}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <Row key={index} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
