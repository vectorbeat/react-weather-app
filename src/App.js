import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chicago" />
        <footer>
          <a
            href="https://github.com/vectorbeat/react-weather-app"
            target="_blank"
          >
            Access my github
          </a>
        </footer>
      </div>
    </div>
  );
}
