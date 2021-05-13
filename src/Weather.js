import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
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

            <div className="main shadow-lg p-3 mb-5 bg-body rounded">
              <div className="row col-12">
                <div className="currently-primary col-7">
                  <p className="currently-temp">
                    {Math.round(weatherData.temperature)}°F
                  </p>
                  <p className="currently-city" id="currentlyCity">
                    {weatherData.city}
                  </p>
                  <p className="currently-country">US</p>
                </div>
                <div className="currently-sup-info col-5">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  />

                  <div className="current-desc text-capitalize">
                    {weatherData.description}
                  </div>

                  <div className="wind">Wind {weatherData.wind}mph</div>
                  <div className="humidity">
                    Humidity {weatherData.humidity}%
                  </div>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fb8b95424c106907f53c4fc0092c4971";
    let city = "New York";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
