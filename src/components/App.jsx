import React from "react";

var isDone = false;

function strike() {
  console.log("Strike as been pressed");
  isDone = true;
  document.getElementById("root").style.textDecortation = "line-through";

}

function unStrike() {
  console.log("unStrike as been pressed");
  isDone = false;
  document.getElementById("root").style.textDecortation = null;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
