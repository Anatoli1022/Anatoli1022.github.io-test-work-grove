interface CellProps {
  value: boolean;
}

const Cell: React.FC<CellProps> = ({ value }) => {
  return (
    <td
      style={{
        backgroundColor: value ? 'lightgreen' : 'lightcoral',
      }}
    ></td>
  );
};

export default Cell;
