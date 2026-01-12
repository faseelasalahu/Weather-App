import { useState } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setweather] = useState(null);
  const [loading, setloading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault(); // To block page refresh
    setloading(true)  // when start search seloading true
    setweather(null)  // change old data when before new data come


    const ApiKey = "8bd2f4e368cb8c3446028cf9924e098e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        //if get response from url set data in to setweather
        setweather(data);
        
      } else {
        alert ("City Not Found")
       
      }
    } catch (error) {
      console.log(error);
    } finally{
      setloading(false) // wether data or not loading will be false
    }
    setCity('')
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">
          <i className="bi bi-search "></i>Search
        </button>
        {loading && (
  <div className="mt-4">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <p>Searching for weather...</p>
  </div>
)}
      </form>
      {!loading && weather && <WeatherCard data={weather} />}
      {/*if weather data avaolable only show weathercard component*/}
    </div>
  );
}

export default App;
