import React from 'react';

export default function Section2(props) {
  return (
    <div className='container my-5 p-3'>
        <div className='row'>
        <div className='col'></div>
            <div className='col-4 text-start mx-2'>
                <h6>Local Time : {props.data.location.localtime}</h6>
                <h6>Timezone : {props.data.location.tz_id}</h6>
                <h6>Country : {props.data.location.country}</h6>
                <h6>Latitude : {props.data.location.lat}</h6>
                <h6>Longitude : {props.data.location.lon}</h6>
            </div>
            
            <div className='col-3 text-start mx-2'>
              <h6>Wind in mph : {props.data.current.wind_mph} </h6>
              <h6>Wind in kmph : {props.data.current.wind_kph} </h6>
              <h6>Wind degree : {props.data.current.wind_degree} </h6>
              <h6>Wind Direction : {props.data.current.wind_dir} </h6>
            </div>
            <div className='col'></div>
        </div>
        
    </div>
  );
}
