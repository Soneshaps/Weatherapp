import React  from 'react';
import Week from './week';



const RightBar = (props) => {


    var sunrise = "N/A ";  
    var sunset = "N/A ";  
    var visibility = props.visibility/1000;
    if(props.sunrise !=="" || props.sunset !==""){
        let unix_timestamp_sunrise = props.sunrise;
        var date = new Date(unix_timestamp_sunrise * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();

        sunrise = hours + ':' + minutes.substr(-2)  ;

        let unix_timestamp_sunset = props.sunset;
        var date1 = new Date(unix_timestamp_sunset * 1000);
        var hours1 = date1.getHours();
        if(hours1>12){
          hours1 = hours1 -12;
        }
        var minutes1 = "0" + date1.getMinutes();

         sunset = hours1 + ':' + minutes1.substr(-2) ;
    }    
     





    return(
        <div className="col-sm-9 weather-detail">
        <div className="row weather-detail-align">
          <div className="col-sm-12 weather-detail-header">
            <div className="row">
            <div className ="col-sm-12 weather-detail-header-top">
            <div className="weather-detail-week-text">
              Week  
            </div>
            <div className="weather-detail-toggle">
               
            </div>
            </div>
           <Week forecast={props.forecast}/>
           </div>
          </div>

          <div className="col-sm-12 weather-detail-bottom">
          <div className="row">
            <div className="col-sm-12 weather-detail-bottom-header">
              Today's Highlight
            </div>
            <div className="col-sm-12 weather-detail-bottom-detail">
              <div className="col-xs-12 weather-detail-bottom-detail-style">
                  <span>Pressure</span><br/>
                  <div className="weather-detail-bottom-value">{props.pressure}</div>
              </div>
              <div className="col-xs-12 weather-detail-bottom-detail-style">
                  <span>Wind Status</span>
                  <div className="weather-detail-bottom-value">{props.wind}<span className="weather-detail-bottom-value-sub">km/h</span></div>
              </div>
              <div className="col-xs-12 weather-detail-bottom-detail-style ">
                  <span>Sunrise & Sunset</span>
                  <div className="sun-status">
                    <div className="sun-status-detail">
                      <div className="sun-status-img"><img alt="sun-status" src="/images/cloudy.jpg"/></div>
                      <div className="sun-value">
                        <div className="sun-time">
                         {sunrise} AM
                        </div>
                      </div>
                    </div>
                    <div className="sun-status-detail">
                    <div className="sun-status-img"><img className="img-responsive" alt="sun-status" src="/images/cloudy.jpg"/></div>
                      <div className="sun-value">
                        <div className="sun-time">
                          {sunset} PM
                        </div>

                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-xs-12 weather-detail-bottom-detail-style">
                  <span>Humidity</span>
                  <div className="weather-detail-bottom-value">{props.humidity}%</div>
              </div>
              <div className="col-xs-12 weather-detail-bottom-detail-style">
                  <span>Visivility</span>
                  <div className="weather-detail-bottom-value">{visibility}<span className="weather-detail-bottom-value-sub">km</span></div>
              </div>
              <div className="col-xs-12 weather-detail-bottom-detail-style"> 
                  <span>Air Quality</span>
                  <div className="weather-detail-bottom-value"> {(typeof props.airIndex.data==='undefined' || props.airIndex.data.length===0)?  'N/A' : props.airIndex.data[0].aqi} </div>
              </div>
             </div> 
            </div>
            </div>
          </div>
        </div>
    );
}

export default RightBar;