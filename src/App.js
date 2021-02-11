import React, { useState } from 'react';
import RightBar from './components/rightBar';

const api = {
  key: "45306efa3d5b264aa969e9ca09c13cc2",
  base: "https://api.openweathermap.org/data/2.5/"

}
const api1 = {
  key: "7c5ac57117028c000099a0ff4fc73997fba6feca",
  base: "https://api.waqi.info/feed/"
}



function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [display, setDisplay] = useState('');
  const [air , setAir] = useState({}); 
  
  const search = evt => {
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
      fetch(`${api.base}forecast?q=${query}&units=metric&appid=${api.key}`)
      .then(res1=>res1.json())
      .then(result1 =>{
        setForecast(result1);

      });
      fetch(`https://api.waqi.info/search/?token=${api1.key}&keyword=${query}`)
      .then(res2 => res2.json())
      .then(ai => {
        setAir(ai);
      });
      setDisplay('display-none')
    }
  }









  
  const dateBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()];    
    return (day);
  }
    var time = new Date();


 
  
  return (
    <div className="main">  
      <div className="container-fluid">
        <div className="row">
          <div className={`col-xs-12 ${display} weather-overlay`}>
            <div className="row">                          
              <div className="col-sm-12 search-overlay">
                <img alt="main" src="/images/cloudy.jpg"/>
                <input
                     type="text"
                     className="searchTerm" 
                     placeholder="Search for places"
                     onChange={e=> setQuery(e.target.value)}
                     value={query}
                     onKeyPress={search}
                     />
                </div>  
            </div>
          </div>
          <div className="weather-main">
          <div className="col-sm-3 weather-overview">
            <div className="row">
              <div className="col-lg-12 weather-overview-inner">
                <div className="row weather-overview-inner-row">
                  <div className="col-lg-12 search">

                    <input
                     type="text"
                     className="searchTerm" 
                     placeholder="Search for places"
                     onChange={e=> setQuery(e.target.value)}
                     value={query}
                     onKeyPress={search}
                     />

                  </div>

        {(typeof weather.main !="undefined") ?(
              <div>             
               <div className="col-lg-12 weather-info">
                  <div className="weather-info-pic">
                    <img alt="display-weather" className="img-responsive" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}/>
                  </div>
                  <div className="weather-info-degre">
                    {Math.round(weather.main.temp)}°C
                  </div>
                  <div className="weather-info-date">
                    {dateBuilder(new Date(weather.dt))}, <span>{time.toLocaleTimeString()}</span> 
                  </div>
                  <div className="weather-info-detail">
                    <img alt="status" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}/>{weather.weather[0].main} <br/>
                    <img alt="rain" src={`http://openweathermap.org/img/wn/09d@4x.png`}/> Rain - N/A
                  </div>
                  <div className="weather-info-place">
                   <div className="weather-info-place-outer">
                   {weather.name}, {weather.sys.country}
                 </div>  
                  </div>
               </div>
              </div>
        ) : ('')}
      </div>
      </div>
      </div>
    </div>
    {(typeof weather.main !="undefined") ?(
    <RightBar
     sunrise={
      (typeof weather.main !="undefined") ? weather.sys.sunrise : ''
      }
     sunset={
      (typeof weather.main !="undefined") ? weather.sys.sunset : ''
      }      
      humidity={
      (typeof weather.main !="undefined") ? weather.main.humidity : ''
        }
      visibility={
      (typeof weather.main !="undefined") ? weather.visibility : ''
          }      
      wind={
      (typeof weather.main !="undefined") ? weather.wind.speed : ''
          }    
      lat={
      (typeof weather.main !="undefined") ? weather.coord.lat : ''
            }
      lon={
      (typeof weather.main !="undefined") ? weather.coord.lon : ''
            }
      location={
      (typeof weather.main !="undefined") ? weather.name : ''
                    }  
      pressure={
      (typeof weather.main !="undefined") ? weather.main.pressure : ''
                    }  
      forecast={
        forecast
      }
      airIndex={
        air
      }                                                                
      /> 
    ):''}
        </div>
        </div>
        </div>
        </div>
        
  );
}

export default App;
