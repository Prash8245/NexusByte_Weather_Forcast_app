import React from 'react';

export default function Section1(props) {

    const changeTempF = ()=>{
        document.getElementById('temp').innerHTML = props.data.current.temp_f
    }

    const changeTempC = ()=>{
        document.getElementById('temp').innerHTML = props.data.current.temp_c
    }

  return (
    <div  className='my-4'>
        <div className='row'>
            <div className='col-12'>
                <div className='row mb-4'>
                    <div className='col-5'>
                        <img className='image' src={props.data.current.condition.icon} alt='condition img' />
                    </div>
                    <div className='col-5 pt-4'>
                        <h1 className='d-inline'> 
                            <span id='temp'>{props.data.current.temp_c}</span><sup>o</sup>
                        </h1> &nbsp;
                        <h5 className='d-inline' style={{cursor : 'pointer'}} onClick={changeTempC} >C</h5> &nbsp; | &nbsp;
                        <h5 className='d-inline' style={{cursor : 'pointer'}} onClick={changeTempF}>F</h5>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 text-start'>
                        <p style={{fontSize: "large",fontWeight : 'bold',lineHeight:'16px'}}>Humidity : {props.data.current.humidity}</p>
                        <p style={{fontSize: "large",fontWeight : 'bold',lineHeight:'16px'}}>Pressure : {props.data.current.pressure_in}</p>
                        <p style={{fontSize: "large",fontWeight : 'bold',lineHeight:'16px'}}>UV index : {props.data.current.uv}</p>
                    </div>
                    <div className='col-6'>
                        <h5>{props.data.location.name}</h5>
                        <h5>{props.data.location.region}</h5>
                        <h5>{props.data.current.condition.text}</h5>
                    </div>
                </div>
                <div className='row my-5 text-start'>
                    <h5>Sunrise and Sunset</h5>
                    <div className='col-5 px-2 py-2 mx-3 my-2'>
                        <p className='fw-bold'>Sunrise</p>
                        <p>{props.data.forecast.forecastday[0].astro.sunrise}</p>
                    </div>
                    <div className='col-5 px-2 py-2 mx-3 my-2'>
                        <p className='fw-bold'>Sunset</p>
                        <p>{props.data.forecast.forecastday[0].astro.sunset}</p>
                    </div>
                    <div className='col-5 px-2 py-2 mx-3 my-2'>
                        <p className='fw-bold'>Moon Phase</p>
                        <p>{props.data.forecast.forecastday[0].astro.moon_phase}</p>
                    </div>
                    <div className='col-5 px-2 py-2 mx-3 my-2'>
                        <p className='fw-bold'>Moon Illumination</p>
                        <p>{props.data.forecast.forecastday[0].astro.moon_illumination}</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
  );
}
