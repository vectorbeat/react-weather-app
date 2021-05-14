import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("farenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  if (unit === "farenheit") {
    return (
      <div className="WeatherTemperature">
        <p className="currently-temp">
          {Math.round(props.farenheit)}
          <p className="weather-unit">
            °F |{" "}
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </p>
        </p>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <p className="currently-temp">
          {Math.round(props.farenheit)}
          <p className="weather-unit">
            <a href="/" onClick={showFarenheit}>
              °F{" "}
            </a>
            | <strong>°C</strong>
          </p>
        </p>
      </div>
    );
  }
}
