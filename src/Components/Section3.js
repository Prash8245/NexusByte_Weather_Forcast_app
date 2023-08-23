import React from 'react';

export default function Section3(props) {
  return (
    <div className='container text-start'>
        <div className='row'>
            <div className='col-3'><h6>Wind in mph</h6></div>
            <div className='col-3'><h6>{props.data.current.wind_mph}</h6></div>
        </div>
        <div className='row'>
            <div className='col-3'><h6>Wind in kmph</h6></div>
            <div className='col-3'><h6>{props.data.current.wind_kph}</h6></div>
        </div>
        <div className='row'>
            <div className='col-3'><h6>Wind degree</h6></div>
            <div className='col-3'><h6>{props.data.current.wind_degree}</h6></div>
        </div>
        <div className='row'>
            <div className='col-3'><h6>Wind Direction</h6></div>
            <div className='col-3'><h6>{props.data.current.wind_dir}</h6></div>
        </div>
    </div>
  );
}
