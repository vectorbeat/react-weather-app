import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="Day col-12">
          <div className="forecast-date col-2">Mon</div>
          <div className="weather-icon col-2">
            <i className="fas fa-cloud" width="70px"></i>
          </div>
          <div className="forecast-high col-2">
            High <br />
            <strong>80°F</strong>
          </div>
          <div className="forecast-low col-2">
            Low <br />
            <strong>50°F</strong>
          </div>
          <div className="forecast-temp-descrip col-4">Mostly Cloudy</div>
          <hr />
        </div>
      </div>
    </div>
  );
}
