import React from 'react';

export default function Section2(props) {
  return (
    <div className='container my-5 p-3'>
      <h4 className='text-start'>Today Overview</h4>
        <div className='row'>
            <div className='col'></div>
            <div className='col-5 text-start my-4'>
                <div className='Cards'>
                  <h6>Local Time </h6><h1 className='text-start '>{props.data.location.localtime.split(" ")[1]}</h1>
                </div>
            </div>
            <div className='col-5 text-start my-4'>
                <div className='Cards'>
                  <h6>Cloud </h6><h1 className='text-start '>{props.data.current.cloud}%</h1>
                </div>
            </div>
            <div className='col'></div>
        </div>

        <div className='row'>
            <div className='col'></div>
            <div className='col-5 text-start my-4'>
                <div className='Cards'>
                  <h6>Wind </h6><h1 className='text-start '>{props.data.current.wind_kph} km/hr</h1>
                </div>
            </div>
            <div className='col-5 text-start my-4'>
                <div className='Cards'>
                  <h6>Wind Direction </h6><h1 className='text-start '>{props.data.current.wind_dir}</h1>
                </div>
            </div>
            <div className='col'></div>
        </div>
    </div>
  );
}
