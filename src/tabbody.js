export function TabBody({curentDate}) {
  const allMonthDays = [];
  const firstMonthDay = new Date(curentDate.getFullYear(), curentDate.getMonth(), 1);

  for (let i = 0; i < 41; i++) {
    allMonthDays[i] = firstMonthDay - firstMonthDay.getDay() + i;
  };

  const row = [];
  for (let i = 0; i < 5; i++) {
    row[i] = allMonthDays.slice(i, i + 7);
  };

  const listRow = [];
  for (let i = 0; i < 5; i++) {
    listRow[i] = () => {
      for (let j = 0; j < 6; j++) 
      return (
        <td>{row[i][j]}</td>
      )
    }
  };

  const tabBody = () => {
    for (let i = 0; i < 5; i++) {
      return (
        <tr>
          {listRow[i]}
        </tr>
      )
    }
  };

  return (
    <tbody>
      {tabBody}
    </tbody>
  );
}