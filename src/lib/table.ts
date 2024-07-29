import { getRandomInt } from '../utils/random';

interface Row {
  title: string;
  cells: boolean[];
}

export async function generateColumns(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const numColumns = getRandomInt(2, 100);
      const columns = Array.from(
        { length: numColumns },
        (_, index) => `Обработка ${index + 1}`
      );
      resolve(columns);
    }, 1500);
  });
}

export async function generateRows(numColumns: number): Promise<Row[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const numRows = getRandomInt(2, 100);
      const rows = Array.from({ length: numRows }, (_, index) => ({
        title: `Заказ ${index + 1}`,
        cells: Array.from({ length: numColumns }, () => Math.random() < 0.5),
      }));
      resolve(rows);
    }, 1500);
  });
}

export const addRow = ({
  rows,

  columns,
}: {
  rows: Row[];

  columns: string[];
}) => {
  const newRow: Row = {
    title: `Заказ ${rows.length + 1}`,
    cells: Array.from({ length: columns.length }, () => Math.random() < 0.5),
  };
  return [...rows, newRow];
};

export const deleteRow = (
  index: number,
  rows: { title: string; cells: boolean[] }[]
) => {
  return rows.filter((_, i) => i !== index);
};

export const editRow = (
  index: number,
  rows: { title: string; cells: boolean[] }[]
) => {
  const editedRows = [...rows];
  editedRows[index] = {
    ...editedRows[index],
    cells: editedRows[index].cells.map(() => Math.random() < 0.5),
  };
  return editedRows;
};
