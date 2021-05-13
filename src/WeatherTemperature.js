import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <p className="currently-temp">
        {Math.round(props.farenheit)}
        <p className="weather-unit">°F</p>
      </p>
    </div>
  );
}
