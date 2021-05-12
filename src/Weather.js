import React from "react";
import "./index.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <h1>hi from weather</h1>
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
        </div>
      </div>
    </div>
  );
}
