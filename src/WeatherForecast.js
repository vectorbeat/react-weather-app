import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row align-items-center">
          <div className="Day col-12">
            <div className="forecast-date col-2">Mon</div>
            <div className="weather-icon col-2">
              {forecastData[0].weather[0].icon}
            </div>
            <div className="forecast-high col-2">
              High
              <br />
              <strong>{Math.round(forecastData[0].temp.max)}°F</strong>
            </div>
            <div className="forecast-low col-2">
              Low <br />
              <strong>{Math.round(forecastData[0].temp.min)}°F</strong>
            </div>
            <div className="forecast-temp-descrip text-capitalize col-4">
              {forecastData[0].weather[0].description}
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "fb8b95424c106907f53c4fc0092c4971";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
