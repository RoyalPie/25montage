import SearchBar from "./components/search";
import './app.css'
import Weather from "./components/weatherAPI";
const WeatherApp = () => {
  return (
    <div className="app-container">
      <Weather />
    </div>
  );
}
export default WeatherApp