import './App.css';
import Calendar from './Calendar.js'

const now = new Date(2023, 5, 12);

function App() {
  return (
    <Calendar date={now} />
  );
};

export default App;
