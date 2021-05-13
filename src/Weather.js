import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row search-section">
            <form className="search-bar row" id="search">
              <div className="search-title col-6">Search</div>
              <div className="use-location col-6">
                <a href="https://www.google.com" id="use-current">
                  Use Current location
                </a>
              </div>
              <div className="input-group mb-3">
                <input
                  type="search"
                  className="form-control"
                  id="search-box"
                  placeholder="Enter city..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  autoFocus="on"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </form>
            <CurrentWeather data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fb8b95424c106907f53c4fc0092c4971";

    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
