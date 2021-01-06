import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import Message from "./components/Message";
import Button from "./components/Button";

function App() {
  const [totalNumOfClicks, setTotalNumOfClicks] = useState(0);

  const incrementNumberOfClicks = () => {
    setTotalNumOfClicks(totalNumOfClicks + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          title="You have clicked"
          incrementNumberOfClicks={incrementNumberOfClicks}
        />
        <Button
          title="Click here +"
          incrementNumberOfClicks={incrementNumberOfClicks}
        />
        <Button
          title="Please don't click"
          incrementNumberOfClicks={incrementNumberOfClicks}
        />
        <span>Total {totalNumOfClicks}</span>
      </header>
    </div>
  );
}

export default App;
