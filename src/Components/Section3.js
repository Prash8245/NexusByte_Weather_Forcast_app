import React from 'react';
import { useEffect ,useState} from 'react';
import defaultData from './forcast.json';

export default function Section3(props) {

    const [data, setdata] = useState(defaultData);
    const [loca,setlocation] = useState('Bangalore');
    useEffect(()=>{
        fetchData();
      });
      
      const fetchData = async (place) =>{
        try {
            setlocation(props.location);
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f69aeb38dcbf425ab25141645232208&q=${loca}&days=7`);
            const jsonData = await response.json();
            jsonData.location ? setdata(jsonData) : console.log("Same Data");
    
        } catch (error) {
          console.error("Error in Fetching data");
        }
      };

      const GetDay = (forcastDate)=>{
        const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date(forcastDate);
        return weekDay[d.getDay()] 
      }

  return (
    <div  className='container text-center' id='Section3'>
        <div className='row'>
            <div className='col-2'>
                <div>
                    <img src={data.forecast.forecastday[0].day.condition.icon} alt='condition' className='object fit' />
                    <p>{data.forecast.forecastday[0].date}</p>
                    <p>{GetDay(data.forecast.forecastday[0].date)}</p>
                </div>
            </div>
            <div className='col-2'>
                <div>
                    <img src={data.forecast.forecastday[1].day.condition.icon} alt='condition' className='object fit' />
                    <p>{data.forecast.forecastday[1].date}</p>
                    <p>{GetDay(data.forecast.forecastday[1].date)}</p>
                </div>
            </div>
            <div className='col-2'>
                <div>
                    <img src={data.forecast.forecastday[2].day.condition.icon} alt='condition' className='object fit' />
                    <p>{data.forecast.forecastday[2].date}</p>
                    <p>{GetDay(data.forecast.forecastday[2].date)}</p>
                </div>
            </div>
            <div className='col-2'>
                <div>
                    <img src={data.forecast.forecastday[3].day.condition.icon} alt='condition' className='object fit' />
                    <p>{data.forecast.forecastday[3].date}</p>
                    <p>{GetDay(data.forecast.forecastday[3].date)}</p>
                </div>
            </div>
            <div className='col-2'>
                <div>
                    <img src={data.forecast.forecastday[4].day.condition.icon} alt='condition' className='object fit' />
                    <p>{data.forecast.forecastday[4].date}</p>
                    <p>{GetDay(data.forecast.forecastday[4].date)}</p>
                </div>
            </div>
            <div className='col-2'>
                <div>
                    <img src={data.forecast.forecastday[5].day.condition.icon} alt='condition' className='object fit' />
                    <p>{data.forecast.forecastday[5].date}</p>
                    <p>{GetDay(data.forecast.forecastday[5].date)}</p>
                </div>
            </div>
        </div>
        
    </div>
  );
}
