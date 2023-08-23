import React from 'react';

export default function Section2(props) {
  return (
    <div className='container my-5 p-3'>
        <div className='row'>
            <div className='col-5 text-start'>
                <h6>Local Time : {props.data.location.localtime}</h6>
                <h6>Timezone : {props.data.location.tz_id}</h6>
                <h6>Country : {props.data.location.country}</h6>
            </div>
            <div className='col'></div>
            <div className='col-4 text-end'>
                <h6>Latitude : {props.data.location.lat}</h6>
                <h6>Longitude : {props.data.location.lon}</h6>
            </div>
        </div>
        
    </div>
  );
}
