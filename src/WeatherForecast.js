import axios from "axios";
import React from "react";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "fb8b95424c106907f53c4fc0092c4971";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
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
