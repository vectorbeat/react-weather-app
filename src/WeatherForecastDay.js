import React from "react";

export default function WeatherForecastDay(props) {
  let iconCode = props.data.weather[0].icon;
  let forecastIconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="container">
        <div className="forecast-date col-2">{day()}</div>
        <div className="weather-icon col-2">
          {" "}
          <img src={forecastIconUrl} alt="icon" width="60px" />{" "}
        </div>
        <div className="forecast-high col-2">
          High
          <br />
          <strong>{Math.round(props.data.temp.max)}°F</strong>
        </div>
        <div className="forecast-low col-2">
          Low <br />
          <strong>{Math.round(props.data.temp.min)}°F</strong>
        </div>
        <div className="forecast-temp-descrip text-capitalize col-4">
          {props.data.weather[0].description}
        </div>
      </div>
    </div>
  );
}
