import React from "react";
import "./App.css";
import dayjs from "dayjs";
function App() {
  //const [today, setToday] = useState(dayjs());

  var today = dayjs();
  const born = dayjs("12/12/2020");
  const daysOld = today.diff(born, "days");
  const weeksOld = Math.floor(daysOld / 7);
  const andDays = daysOld % 7;

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <u>Cleo</u>
        </h1>
        <h4>Born: 12/12/2020</h4>
        <h2>
          {weeksOld} weeks and {andDays} days old
        </h2>
      </header>
    </div>
  );
}

export default App;
