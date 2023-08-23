import React from 'react';

export default function NavBar(props) {
    
    
    
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
    <div className='container-fluid row my-1 p-3 bg-dark'>
        <div className='col-3'>
            <h4>{
                GetMonth(props.data.location.localtime.split(" ")[0])} {GetYear(props.data.location.localtime.split(" ")[0])}
            </h4>
            <p>
                {GetDay(props.data.location.localtime.split(" ")[0])} &nbsp;
                {GetMonth(props.data.location.localtime.split(" ")[0])} &nbsp;
                {new Date(props.data.location.localtime.split(" ")[0]).getDate()}
            </p>
        </div>
        <div className='col'></div>
        <div className='col-5'>
            <input type='text' name='search' /> <i className='fas fa-search p-3 mx-3 ' style={{'fontSize':'1.5rem'}}></i>
        </div>        
    </div>
  );
}
