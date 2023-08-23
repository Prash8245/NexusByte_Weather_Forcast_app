import React from 'react';

export default function Section1(props) {
  return (
    <div className='container my-4'>
        <div className='row'>
            <div className='col-4'>
                <div className='row'>
                    <div className='col-3'>
                        <img className='object-cover' src={props.data.current.condition.icon} alt='condition img' />
                    </div>
                    <div className='col-4'>
                        <h1 className='d-inline'>{props.data.current.temp_c}</h1> <h5 className='d-inline'>C</h5> | <h5 className='d-inline'>F</h5>
                    </div>
                    <div className='col-5'>
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
