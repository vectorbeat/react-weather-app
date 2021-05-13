import React from "react";
import Weather from "./Weather";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="main shadow-lg p-3 mb-5 bg-body rounded">
        <div className="row col-12">
          <div className="currently-primary col-7">
            <WeatherTemperature farenheit={props.data.temperature} />

            <p className="currently-city" id="currentlyCity">
              {props.data.city}
            </p>
            <p className="currently-country">{props.data.country}</p>
          </div>
          <div className="currently-sup-info col-5">
            <img src={props.data.iconUrl} alt={props.data.description} />

            <div className="current-desc text-capitalize">
              {props.data.description}
            </div>

            <div className="wind">Wind {Math.round(props.data.wind)}mph</div>
            <div className="humidity">Humidity {props.data.humidity}%</div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
}
