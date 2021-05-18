import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "fb8b95424c106907f53c4fc0092c4971";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row search-section">
            <form
              className="search-bar row"
              id="search"
              onSubmit={handleSubmit}
            >
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
                  onChange={handleCityChange}
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
              <CurrentWeather data={weatherData} />
              <WeatherForecast />
              <WeatherForecast />
              <WeatherForecast />
              <WeatherForecast />
              <WeatherForecast />
              <a
                href="https://www.google.com"
                className="btn btn-primary"
                id="tenDay"
              >
                View 10 day forecast
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
