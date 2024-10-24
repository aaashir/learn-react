import { useState } from "react";

function App() {

  const [countdownValue, setCountdownValue] = useState(0)

  const handleSubtract = () => {
    if(countdownValue >=1) {
      setCountdownValue(countdownValue-1)
    }
  }

  const handleAdd = () => {
    setCountdownValue(countdownValue+1)
  }

  return (
    <div className="app">
      <div className="timer_container">
        <h1>Countdown App</h1>

        <div className="countdown_container">
          <p className="countdown_label">{countdownValue}</p>
          <div className="buttons">
            <button onClick={handleSubtract}>-</button>
            <button onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;