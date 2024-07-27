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

export async function generateRows(
  numColumns: number
): Promise<{ title: string; cells: boolean[] }[]> {
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
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
