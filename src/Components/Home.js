import React, { useEffect ,useState} from 'react';
import defaultData from './data.json';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';


export default function Home() {

  const [data, setdata] = useState(defaultData);
  const [loca,setlocation] = useState('Bangalore');

  useEffect(()=>{
    fetchData();
  },[]);
  
  const fetchData = async (place) =>{
    try {
        setlocation(place);
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f69aeb38dcbf425ab25141645232208&q=${loca}`);
        const jsonData = await response.json();
        jsonData.location ? setdata(jsonData) : console.log("Same Data");

    } catch (error) {
      console.error("Error in Fetching data");
    }
  };

  return (
    <div>
        <div className='row m-4 p-4 nav' >
          <div className='col-3' onClick={()=>{fetchData('Bangalore') }}>Banglore</div>
          <div className='col-3' onClick={()=>{fetchData('Chennai') }}>Chennai</div>
          <div className='col-3' onClick={()=>{fetchData('Mumbai') }}>Mumbai</div>
          <div className='col-3' onClick={()=>{fetchData('india') }}>New Delhi</div>
        </div>
        <Section1 data={data} />
        <Section2 data={data} />
        <Section3 data={data} />
    </div>
  );
}
