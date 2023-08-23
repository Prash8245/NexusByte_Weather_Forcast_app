import React from 'react';
import { Link } from 'react-router-dom';

export default function Section3(props) {

      const GetDay = (forcastDate)=>{
        const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date(forcastDate);
        return weekDay[d.getDay()] 
      }

  return (
    <div  className='container text-center' id='Section3'>
        <div className='row'>
            <div className='col-2'>
                <Link to='/info' state={{'data': props.data.forecast.forecastday[0],'location' : props.data.location}}>
                    <div>
                        <img src={props.data.forecast.forecastday[0].day.condition.icon} alt='condition' className='object fit' />
                        <p>{props.data.forecast.forecastday[0].day.avgtemp_c}<sup>o</sup> C</p>
                        <p>{GetDay(props.data.forecast.forecastday[0].date)}</p>
                    </div>
                </Link>
            </div>
            <div className='col-2'>
                <Link to='/info' state={{'data': props.data.forecast.forecastday[1],'location' : props.data.location}}>
                    <div>
                        <img src={props.data.forecast.forecastday[1].day.condition.icon} alt='condition' className='object fit' />
                        <p>{props.data.forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>  C</p>
                        <p>{GetDay(props.data.forecast.forecastday[1].date)}</p>
                    </div>
                </Link>
            </div>
            <div className='col-2'>
                <Link to='/info' state={{'data': props.data.forecast.forecastday[2],'location' : props.data.location}}>
                    <div>
                        <img src={props.data.forecast.forecastday[2].day.condition.icon} alt='condition' className='object fit' />
                        <p>{props.data.forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>  C</p>
                        <p>{GetDay(props.data.forecast.forecastday[2].date)}</p>
                    </div>
                </Link>
                
            </div>
            <div className='col-2'>
                <Link to='/info' state={{'data': props.data.forecast.forecastday[3],'location' : props.data.location}}>
                    <div>
                        <img src={props.data.forecast.forecastday[3].day.condition.icon} alt='condition' className='object fit' />
                        <p>{props.data.forecast.forecastday[3].day.avgtemp_c}<sup>o</sup> C</p>
                        <p>{GetDay(props.data.forecast.forecastday[3].date)}</p>
                    </div>
                </Link>
            </div>
            <div className='col-2'>
                <Link to='/info' state={{'data': props.data.forecast.forecastday[4],'location' : props.data.location}}>
                    <div>
                        <img src={props.data.forecast.forecastday[4].day.condition.icon} alt='condition' className='object fit' />
                        <p>{props.data.forecast.forecastday[4].day.avgtemp_c}<sup>o</sup> C</p>
                        <p>{GetDay(props.data.forecast.forecastday[4].date)}</p>
                    </div>
                </Link>
            </div>
            <div className='col-2'>
                <Link to='/info' state={{'data': props.data.forecast.forecastday[5],'location' : props.data.location}}>
                    <div>
                        <img src={props.data.forecast.forecastday[5].day.condition.icon} alt='condition' className='object fit' />
                        <p>{props.data.forecast.forecastday[5].day.avgtemp_c}<sup>o</sup> C</p>
                        <p>{GetDay(props.data.forecast.forecastday[5].date)}</p>
                    </div>
                </Link>
            </div>
        </div>
        
    </div>
  );
}
