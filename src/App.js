import React, {useState} from 'react';
import Language from './language';
import WeatherDisplay from './weather-display';
import './App.css';
import { useEffect } from 'react';

function App() {

//Set states
const [data, setWeather] = useState({});
const [cityname, setLocations] = useState("London");
const [language, setLanguage] = useState("en");

//Renders weather on default
useEffect(() => ifClicked(), [])

//Loads APIkey from .env file
let APIkey = process.env.REACT_APP_KEY

//Renders ifClicked
function ifClicked() {


  console.log("click")

  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric&lang=${language}`


  fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    setWeather({
      name: data.name,
      description: data.weather[0].description,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      clouds: data.clouds.all,
      timezone: data.timezone,
      sunset: data.sys.sunset,
      icon: data.weather[0].icon
    });
    console.log(data);
  })
  .catch((error) => console.log(error))
}



  return (
    <div className="App">
      <h1 id="title">Weather App</h1>
      <div className="Search">
        <input type="text" value={cityname} onChange={(e) => setLocations(e.target.value)} />
        <button type="submit" className="search_button" onClick={ifClicked}>Search weather</button>
        <select name="Language" onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="ja">Japanese</option>
        </select>
      </div>
      <br/>
      <WeatherDisplay data={data}/>
      <Language lang={language}/>
    </div>
  );
}

export default App;
