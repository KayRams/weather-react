import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <p>
          open-sourced on{" "}
          <a href="https://github.com/KayRams/weather-react">
            <strong>GitHub</strong>
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
