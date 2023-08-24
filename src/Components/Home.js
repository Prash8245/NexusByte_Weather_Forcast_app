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

  const GetMonth = (values)=>{
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date(values);
    return month[d.getMonth()];
}

const GetDay = (values)=>{
    const day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date(values);
    return day[d.getDay()];
}

const GetYear = (values)=>{
    const d = new Date(values);
    return d.getFullYear();
}

  return (
    <div className='row my-2'>
      <div id='leftside' className='col-8'>
        {/*NavBar */}
        <div id='Navbar' className='row p-3 '>
              <div className='col-3'>
                  <h4>{
                      GetMonth(data.location.localtime.split(" ")[0])} {GetYear(data.location.localtime.split(" ")[0])}
                  </h4>
                  <p>
                      {GetDay(data.location.localtime.split(" ")[0])} &nbsp;
                      {new Date(data.location.localtime.split(" ")[0]).getDate()},&nbsp;
                      {GetMonth(data.location.localtime.split(" ")[0])} 
                  </p>
              </div>
              <div className='col'></div>
              <div className='col-5'>
                  <input type='text' placeholder='Search City' name='search' id='search' className='rounded p-2' /> <i className='fas fa-search p-3 mx-3 ' style={{'fontSize':'1.5rem' ,'cursor':'pointer'}} onClick={()=>{
                    var searchValue = document.getElementById('search').value;
                    if(searchValue !== " "){
                      fetchData(searchValue)
                    }
                    else{
                      alert('City not present');
                    }
                  }}></i>
              </div>       
        </div>
        {/* Overview Component */}
        <Section2 data={data} />
        {/* Forecast Component */}
        <Section3 data={data} location={loca} /> 
      </div>
      <div className='col-4'>
        <div id='section1'>
            {/* Current Condition Component */}
            <Section1 data={data} />
        </div>
      </div>
    </div>
  );
}
