import React, { useEffect ,useState} from 'react';
import defaultData from './forcast.json';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';


export default function Home() {

  const [data, setdata] = useState(defaultData);
  const [loca,setlocation] = useState('Bangalore');

  useEffect(()=>{
    fetchData();
  });
  
  const fetchData = async (place) =>{
    try {
        setlocation(place);
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f69aeb38dcbf425ab25141645232208&q=${loca}&days=7`);
        const jsonData = await response.json();
        jsonData.location ? setdata(jsonData) : console.log("Same Forcast Data");

    } catch (error) {
      console.error("Error in Fetching data");
    }
  };

  return (
    <div>
        <div className='row m-4 p-4 nav' >
          <div className='col-3' onClick={()=>{fetchData('Bangalore') }}>Bangalore</div>
          <div className='col-3' onClick={()=>{fetchData('Chennai') }}>Chennai</div>
          <div className='col-3' onClick={()=>{fetchData('Mumbai') }}>Mumbai</div>
          <div className='col-3' onClick={()=>{fetchData('india') }}>New Delhi</div>
        </div>
        <div id='section1'>
          <Section1 data={data} />
          <Section2 data={data} />
        </div>
        <Section3 data={data} location={loca} />
    </div>
  );
}
