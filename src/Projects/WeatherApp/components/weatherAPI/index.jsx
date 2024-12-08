import { useEffect, useState } from "react";
import SearchBar from "../search";

const Weather = () => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  async function fetchWeatherData(params) {
    setPending(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=07c76a95747b6866bb243b237234c121`
      );
      if (!res.ok) throw new Error(res.statusText);

      const result = await res.json();

      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      console.log(error);
      setPending(false);
      throw new Error(error);
    }
  }

  function handleInput(e) {
    setSearchTerm(e.target.value);
  }
  function handleSearch() {
    fetchWeatherData(searchTerm);
  }
  useEffect(() => {
    fetchWeatherData("hanoi");
  }, []);
  console.log(searchTerm);
  return (
    <div className="weather-container">
      <SearchBar
        searchTerm={searchTerm}
        handleSearchTerm={handleInput}
        handleSearch={handleSearch}
      />
      {data && (
        <div className="display">
          <h3 className="city">
            {data.name}, {data.sys.country}
          </h3>
          <p className="date">
            {new Date().toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <h1 className="temperture">{data.main.temp}</h1>
          <h4 className="overcast">{data.weather.description}</h4>
          <div className="wind-humidity">
            <span>
              <p>{data.wind.speed}</p>
              <p>Wind Speed</p>
            </span>
            <span>
              <p>{data.main.humidity}</p>
              <p>Humidity</p>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Weather;
