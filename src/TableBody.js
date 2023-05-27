export default function TabBody() {
  const now = new Date(2017, 2, 8);
  const allMonthDays = [];
  const firstMonthDay = new Date(now.getFullYear(), now.getMonth(), 1);

  for (let i = 0; i < 42; i++) {
    allMonthDays[i] = new Date(firstMonthDay);
    allMonthDays[i].setDate(firstMonthDay.getDate() - 2 + i);

  };

  const row = [];
  for (let i = 0; i < 5; i++) {
    row[i] = allMonthDays.slice(i * 7, i * 7 + 7);
  };

  const listRow = [];
  for (let i = 0; i < 5; i++) {
    listRow[i] = row[i].map((item) => {
      if (item.getMonth() !== now.getMonth()) {
      return (
        <td className="ui-datepicker-other-month">{item.getDate()}</td>
      )
      } else {
        if (item.getDate() === now.getDate()) {
          return (
            <td className="ui-datepicker-today">{item.getDate()}</td>
          )
        } else {
          return (
            <td>{item.getDate()}</td>
          )
        }
      } 
    })
  };

  const tabBody = listRow.map((item) => {
      return (
        <tr>
          {item}
        </tr>
      )
    });

  return (
    <table>
      {tabBody}
    </table>
  );
};