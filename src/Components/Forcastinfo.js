import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Forcastinfo() {
    const loc = useLocation();
    const data = loc.state.data;
    const locations = loc.state.location;  

  return (
    <div id='info'>
        {/* NavBar Code */}
        <div className='Navbar row my-3'>
            <div className='col-4'>
                <h3>{locations.name}</h3>
            </div>
            <div className='col'></div>
            <div className='col-4'>
                <h5> {new Date(data.date).toDateString()} </h5>
            </div>
        </div>

        {/* Forcast Condition */}
        <div className='row my-3 p-5'>
            <div className='col-1'>
                <img className='image' src={data.day.condition.icon} alt='condition' />
            </div>
            <div className='col-1 pt-4'>
                <h4>{data.day.avgtemp_c} <sup>o</sup> C</h4>
            </div>
            <div className='col'></div>
            <div className='col-3 pt-3'>
                <h4>{data.day.condition.text}</h4>
            </div>
        </div>

        <hr style={{color:'black', width : '1px'}} />

        <div className='row'>
            
            {/* Chances Of Rain  */}
            <div className='col-6'>
                <h4 className='mb-5'>Chances Of Rain</h4>
                <div className='row my-3 p-1'>
                    <div className="col"></div>
                    <div className='col-1'>
                        <h6>{data.hour[5].time.split(" ")[1]}</h6>
                    </div>
                    <div className='col-7'>
                        <div className='bg-light rounded'>
                            <div className='mt-2 rounded' style={{height : '10px', width : `${data.hour[5].chance_of_rain}%` ,backgroundColor : 'black'}}></div>
                        </div> 
                    </div>
                    <div className='col-1'>
                        <h6>{data.hour[5].chance_of_rain} %</h6>
                    </div>
                    <div className="col"></div>
                </div>

                <div className='row my-3 p-1'>
                    <div className="col"></div>
                    <div className='col-1'>
                        <h6>{data.hour[8].time.split(" ")[1]}</h6>
                    </div>
                    <div className='col-7'>
                        <div className='bg-light rounded'>
                        <div className='mt-2 rounded' style={{height : '10px', width : `${data.hour[8].chance_of_rain}%` ,backgroundColor : 'black'}}></div>
                        </div> 
                        
                    </div>
                    <div className='col-1'>
                        {data.hour[8].chance_of_rain} %
                    </div>
                    <div className="col"></div>
                </div>

                <div className='row my-3 p-1'>
                    <div className="col"></div>
                    <div className='col-1'>
                        <h6>{data.hour[11].time.split(" ")[1]}</h6>
                    </div>
                    <div className='col-7'>
                        <div className='bg-light rounded'>
                        <div className='mt-2 rounded' style={{height : '10px', width : `${data.hour[11].chance_of_rain}%` ,backgroundColor : 'black'}}></div>
                        </div> 
                        
                    </div>
                    <div className='col-1'>
                        {data.hour[11].chance_of_rain} %
                    </div>
                    <div className="col"></div>
                </div>

                <div className='row my-3 p-1'>
                    <div className="col"></div>
                    <div className='col-1'>
                        <h6>{data.hour[14].time.split(" ")[1]}</h6>
                    </div>
                    <div className='col-7'>
                        <div className='bg-light rounded'>
                        <div className='mt-2 rounded' style={{height : '10px', width : `${data.hour[14].chance_of_rain}%` ,backgroundColor : 'black'}}></div>
                        </div> 
                        
                    </div>
                    <div className='col-1'>
                        {data.hour[14].chance_of_rain} %
                    </div>
                    <div className="col"></div>
                </div>

                <div className='row my-3 p-1'>
                    <div className="col"></div>
                    <div className='col-1'>
                        <h6>{data.hour[17].time.split(" ")[1]}</h6>
                    </div>
                    <div className='col-7'>
                        <div className='bg-light rounded'>
                        <div className='mt-2 rounded' style={{height : '10px', width : `${data.hour[17].chance_of_rain}%` ,backgroundColor : 'black'}}></div>
                        </div> 
                        
                    </div>
                    <div className='col-1'>
                        {data.hour[17].chance_of_rain} %
                    </div>
                    <div className="col"></div>
                </div>

                <div className='row my-3 p-1'>
                    <div className="col"></div>
                    <div className='col-1'>
                        <h6>{data.hour[20].time.split(" ")[1]}</h6>
                    </div>
                    <div className='col-7'>
                        <div className='bg-light rounded'>
                        <div className='mt-2 rounded' style={{height : '10px', width : `${data.hour[20].chance_of_rain}%` ,backgroundColor : 'black'}}></div>
                        </div> 
                        
                    </div>
                    <div className='col-1'>
                        {data.hour[20].chance_of_rain} %
                    </div>
                    <div className="col"></div>
                </div>

                <div className='row my-3 p-1'>
                    <div className="col"></div>
                    <div className='col-1'>
                        <h6>{data.hour[23].time.split(" ")[1]}</h6>
                    </div>
                    <div className='col-7'>
                        <div className='bg-light rounded'>
                        <div className='mt-2 rounded' style={{height : '10px', width : `${data.hour[23].chance_of_rain}%` ,backgroundColor : 'black'}}></div>
                        </div> 
                        
                    </div>
                    <div className='col-1'>
                        {data.hour[23].chance_of_rain} %
                    </div>
                    <div className="col"></div>
                </div>
            </div>

            {/* Other Forecast Data */}
            <div className='col-6'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col-4 text-start my-4'>
                        <div className='Cards'>
                        <h6>Avg Humidity</h6><h1 className='text-start '>{data.day.avghumidity}</h1>
                        </div>
                    </div>
                    <div className='col-4 text-start my-4'>
                        <div className='Cards'>
                        <h6>Max wind </h6><h1 className='text-start '>{data.day.maxwind_kph} km/hr</h1>
                        </div>
                    </div>
                    <div className='col'></div>
                </div>

                <div className='row'>
                    <div className='col'></div>
                    <div className='col-4 text-start my-4'>
                        <div className='Cards'>
                        <h6>Avg visibilty</h6><h1 className='text-start '>{data.day.avgvis_km} km</h1>
                        </div>
                    </div>
                    <div className='col-4 text-start my-4'>
                        <div className='Cards'>
                        <h6>UV Index </h6><h1 className='text-start '>{data.day.uv}</h1>
                        </div>
                    </div>
                    <div className='col'></div>
                </div>

                <div className='row'>
                    <div className='col'></div>
                    <div className='col-4 text-start my-4'>
                        <div className='Cards'>
                        <h6>Total Precipitation</h6><h1 className='text-start '>{data.day.totalprecip_in} inch</h1>
                        </div>
                    </div>
                    <div className='col-4 text-start my-4'>
                        <div className='Cards'>
                        <h6> Daily Chance of rain </h6><h1 className='text-start '>{data.day.daily_chance_of_rain}%</h1>
                        </div>
                    </div>
                    <div className='col'></div>
                </div>
            </div>
            
        </div>

        
    </div>
  );
}
