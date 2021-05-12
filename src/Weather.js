import React from "react";
import axios from "axios";

export default function Weather() {
  const apiKey = "fb8b95424c106907f53c4fc0092c4971";
  let city = "New York";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
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
                <p className="currently-temp">51°F</p>
                <p className="currently-city" id="currentlyCity">
                  {city}
                </p>
                <p className="currently-country">US</p>
              </div>
              <div className="currently-sup-info col-5">
                <i className="fas fa-sun weather-icon"></i>

                <div className="current-desc">Partly Cloudy</div>

                <div className="wind">Wind</div>
                <div className="humidity">Humidity</div>
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
