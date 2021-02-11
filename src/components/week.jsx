import React  from 'react';

const Week=(props)=>{

  
  const forecast = props.forecast ;
  var timeNow = Math.floor(Date.now()/100000000);
  let c = timeNow-1 ;

  if (typeof forecast.list=== "undefined" || forecast.list.length === "0"){
    var forecastValue = 0 ;
  }else{
     forecastValue = forecast.list.length;
  }
  var newValueWeather = [];
  let indexNewWeather = 0;
  let indexNewDay = 0;
  var newValueDay = [];
  var icon = [];
  var description = [];
  for (let i = 0; i < forecastValue; i++) {
    let d = Math.floor(forecast.list[i].dt/100000);
    if(c===d){

    }else{
    newValueWeather[indexNewWeather] = forecast.list[i].main;
    icon[indexNewWeather] = forecast.list[i].weather[0].icon ; 
    description[indexNewWeather] = forecast.list[i].weather[0].main ;   
    indexNewWeather++  ;
    
    c++;
      
    }
  }
  var  f = Date.now();
  for (let i = 0; i < newValueWeather.length; i++) {
    if(f === Date.now()){
      newValueDay[indexNewDay] = new Date(f).getDay();
      indexNewDay++;  
      f = f + (24 * 60 * 60 * 1000) ;
    }else{
    newValueDay[indexNewDay] = new Date(f).getDay();
    indexNewDay++;
    f = f + (24 * 60 * 60 * 1000) ;   
    }
  }

  var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var dayFinal = [];  
  for (let index = 0; index < newValueWeather.length; index++) {
    dayFinal[index] = days[newValueDay[index]];
    
  }

  const z = newValueWeather.map((g,index)=>
  <div key={index} className="col-xs-2 weather-detail-day-style">
  <span className="weather-detail-day-style-day">{dayFinal[index]}</span><br/>
  <img alt="day" className="img-responsive" src={`http://openweathermap.org/img/wn/${icon[index]}@4x.png`}/><div className="weather-detail-day-style-description">{description[index]}</div>
  <span className="weather-detail-day-style-max">{Math.round(g.temp_max)}° </span>  <span className="weather-detail-day-style-min"> {Math.round(g.temp_min)}°</span>
  </div>
  );
    

  

return(
<div className="col-sm-12 weather-detail-days">
    <div className="col-sm-12 weather-detail-days-inner">
        {z}
      </div>

</div>
)
}


export default Week;