import React, { useEffect } from 'react'
import {useState} from 'react';

function LiveSearch() {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    
    },[])
    const [data, setData]= useState([])
    const[filterData, setFilterData] = useState([])
    const handleFilter = (value) => {
        const res = filterData.filter(f =>f.name.toLowerCase().includes(value))

    }
  return (
    // <>
    // <div className='search-top'>
    // <div className='search'>
    //     <input type="text" placeholder='Search Here'/>
    // </div>
    // <div className='seach-result'>
    //     {data.map((d,i)=> (
    //         <div key ={i}>
    //             {d,name}
    // </div>
    //  ))}
    // </div>
    // </>
)
};
export from  LiveSearch;
