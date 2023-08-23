import React from 'react';

export default function Section1(props) {

    const changeTempF = ()=>{
        document.getElementById('temp').innerHTML = props.data.current.temp_f
    }

    const changeTempC = ()=>{
        document.getElementById('temp').innerHTML = props.data.current.temp_c
    }

  return (
    <div  className='container my-4'>
        <div className='row'>
            <div className='col-4'>
                <div className='row'>
                    <div className='col-2'>
                        <img className='object-cover' src={props.data.current.condition.icon} alt='condition img' />
                    </div>
                    <div className='col-5'>
                        <h1 className='d-inline'> 
                            <span id='temp'>{props.data.current.temp_c}</span>
                        </h1> 
                        <h5 className='d-inline' onClick={changeTempC} >C</h5> | <h5 className='d-inline' onClick={changeTempF}>F</h5>
                    </div>
                    <div className='col-5 text-start'>
                        <p style={{fontSize: "small",fontWeight : 'bold',lineHeight:'6px'}}>Humidity : {props.data.current.humidity}</p>
                        <p style={{fontSize: "small",fontWeight : 'bold',lineHeight:'6px'}}>Pressure : {props.data.current.pressure_in}</p>
                        <p style={{fontSize: "small",fontWeight : 'bold',lineHeight:'6px'}}>Wind : {props.data.current.wind_kph}</p>
                    </div>
                </div>
            </div>
            <div className='col'></div>
            <div className='col-2'>
                <h5>{props.data.location.name}</h5>
                <h5>{props.data.location.region}</h5>
                <h5>{props.data.current.condition.text}</h5>
            </div>
        </div>
    </div>
  );
}
