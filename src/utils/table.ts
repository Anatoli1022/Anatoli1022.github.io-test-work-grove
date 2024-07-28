interface Row {
  title: string;
  cells: boolean[];
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  setRows,
  columns,
}: {
  rows: Row[];
  setRows: React.Dispatch<React.SetStateAction<Row[]>>;
  columns: string[];
}) => {
  const newRow: Row = {
    title: `Заказ ${rows.length + 1}`,
    cells: Array.from({ length: columns.length }, () => Math.random() < 0.5),
  };
  setRows([...rows, newRow]);
};

export const deleteRow = (
  index: number,
  rows: { title: string; cells: boolean[] }[],
  setRows: React.Dispatch<
    React.SetStateAction<{ title: string; cells: boolean[] }[]>
  >
) => {
  const filteredRows = rows.filter((_, i) => i !== index);
  setRows(filteredRows);
};

export const editRow = (
  index: number,
  rows: { title: string; cells: boolean[] }[],
  setRows: React.Dispatch<
    React.SetStateAction<{ title: string; cells: boolean[] }[]>
  >
) => {
  const editedRows = [...rows];
  editedRows[index] = {
    ...editedRows[index],
    cells: editedRows[index].cells.map(() => Math.random() < 0.5),
  };
  setRows(editedRows);
};
