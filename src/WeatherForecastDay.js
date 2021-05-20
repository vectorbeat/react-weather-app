import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="container">
        <div className="forecast-date col-2">{props.data.dt}</div>
        <div className="weather-icon col-2">{props.data.weather[0].icon}</div>
        <div className="forecast-high col-2">
          High
          <br />
          <strong>{props.data.temp.max}°F</strong>
        </div>
        <div className="forecast-low col-2">
          Low <br />
          <strong>{props.data.temp.min}°F</strong>
        </div>
        <div className="forecast-temp-descrip text-capitalize col-4">
          {props.data.weather[0].description}
        </div>
      </div>
    </div>
  );
}
