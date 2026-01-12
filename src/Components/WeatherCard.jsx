import React from "react";

export default function WeatherCard({ data }) {
  if(!data) return null;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-card">
      <div className="card-body">
        <h2 className="cardtitle">{data.name}, {data.sys.country} </h2>
        <img src={iconUrl} alt="icon" />
        <h1 className="disply">{Math.round(data.main.temp)}°C</h1>
        <p className="text">{data.weather[0].description}</p>
        <hr />
        <div className="row">
          <div className="col">
           <i class="bi bi-moisture"></i>
            <p className="text">Humidity</p> 
            
            <strong>{data.main.humidity}%</strong>
          </div>
  <div className="col">
     <i class="bi bi-wind"></i>
    <p className="text">Wind speed</p>
   
    <strong>{data.wind.speed} m/s</strong>
  </div>
        </div>
      </div>
    </div>
  );
}
