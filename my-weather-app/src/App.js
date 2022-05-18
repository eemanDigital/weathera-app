import React, {useState} from "react";
import axios from "axios"

import './index.css';


function App() {

const [data, setData] = useState({});
const [location, setLocation] = useState("") 

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=77846765945a3014c67bab894a29eebe`

const serachLocation = (event)=>{
  if(event.key === "Enter"){
    axios.get(url).then((res) => {
      setData(res.data)
      console.log(res.data);
    })
    setLocation(" ")
  }
  
  }
  
  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={serachLocation}
        type="text"
        placeholder="Enter Location"
        />
      </div>
    <div className="container">
  <div className="top">

  <div className="location">
    <p>{data.name}</p>
  </div>
  <div className="temp"> 
    {data.main ? <h1>{data.main.temp.toFixed()}°F</h1>: null}
  <div className="description">
  {data.weather ? <p>{data.weather[0].main}</p>: null}
      
  </div>
      
      </div>
  </div>
 
 {data.name !== undefined &&
 
 <div className="bottom">
      <div className="feels">
      {data.main ? <p>{data.main.feels_like.toFixed()}°F</p>: null}
    
          <p>Feels Like</p>
      </div>
      <div className="humidity">
        <p className="bold"> 
        {data.main ? <p>{data.main.humidity}%</p>: null}
        </p>
        <p>Humidity</p>
      </div>
      <div className="wind">
     
        {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPH</p>: null}
      <p>Wind Speed</p>
      </div>
    </div>
 
 
 }
      
    
    </div>
  
    </div>
  );
}

export default App;
