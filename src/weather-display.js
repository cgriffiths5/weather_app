import React from 'react';
import './weather-display.css'

function WeatherDisplay(props) {

    const iconUrl = `http://openweathermap.org/img/wn/${props.data.icon}@2x.png`

    function convertTime(unixTime, offset){
      let dt = new Date((unixTime + offset) * 1000)
      let h = dt.getUTCHours()
      let m = "0" + dt.getUTCMinutes()
      let t = h + ":" + m.substr(-2)
      return t
  }

    const sunset = convertTime(props.data.sunset, props.data.timezone)

    return (
  
      <div class="current_weather">
      <p id="header">{props.data.name}</p>
      <p id="header2">{props.data.description}</p>
      <img src={iconUrl} alt="Enter a city"></img>
      <section class="weather_container">
        <div>Temp: {props.data.temp}</div>
        <div>Feels like: {props.data.feels_like}</div>
        <div>Max temp: {props.data.temp_max}</div>
        <div>Min temp: {props.data.temp_min}</div>
      </section>
      <section class="weather_container">
        <div>Humidity: {props.data.humidity}</div>
        <div>Wind: {props.data.wind}</div>
        <div>Cloud cover: {props.data.clouds}</div>
        <div>Sunset: {sunset}</div>
      </section>
      </div>
    )
}

export default WeatherDisplay