import React, { useState } from 'react';


  const LeftBar = () => {

    return(
      <div className="weather-overview">
       <div className="weather-overview-inner">
          <div className="search">
            <div className="search-box">
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
        {(typeof weather.main !="undefined") ?(
        <div>
          
        <div className="weather-info">
            <div className="weather-info-pic">
              <img className="img-fluid" src="/images/cloudy.jpg"/>
            </div>
            <div className="weather-info-degre">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather-info-date">
              {dateBuilder(new Date())}, <span>{time.toLocaleTimeString()}</span> 
            </div>
            <div className="weather-info-detail">
              <img src="/images/cloudy.jpg"/>{weather.weather[0].main} <br/>
              <img src="/images/cloudy.jpg"/> Rain - 30%
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
    );
  }

  export default LeftBar;

  