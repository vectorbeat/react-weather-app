import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row align-items-center">
          <div className="Day col-12">
            <WeatherForecastDay data={forecastData[1]} />
            <WeatherForecastDay data={forecastData[2]} />
            <WeatherForecastDay data={forecastData[3]} />
            <WeatherForecastDay data={forecastData[4]} />
            <WeatherForecastDay data={forecastData[5]} />

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
