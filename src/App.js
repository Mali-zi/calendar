import './App.css';
import Calendar from './Calendar.js'

const now = new Date();

function App() {
  return (
    <Calendar date={now} />
  );
};

export default App;
