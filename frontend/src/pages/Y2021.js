import React, { useEffect, useState } from "react";

import "./year.css";
import axios from "axios";
import Filter from "./Filter.js";
const Y2021 = () => {
  const year =2021;
  const[placeData,setData] = useState([])
//2021 all
  useEffect(()=>{
      try {
        axios.get('http://localhost:3031/2021all')
        .then((response)=>{
          setData(response.data);
          });
         } catch (err) {
        console.log(err)
      }
  },[])
  return (
    <>
<Filter year={year}/>    
    <div className="app-container">
      <h1 align="center" className="head">All Students(2021)</h1>
      <table>
        <thead>
          <tr>
            <th>Srno</th>
            <th>Name</th>
            <th>Company 1</th>
            <th>Company 2</th>
            <th>Company 3</th>
            <th>Company 4</th>
            <th>Company 5</th>
          </tr>
        </thead>
        <tbody>
          {placeData.map((val)=>
          <tr>
          <td>{val.SrNo}</td>
          <td>{val.Name}</td>
          <td>{val.Company1}</td>
          <td>{val.Company2}</td>
          <td>{val.Company3}</td>
          <td>{val.Company4}</td>
          <td>{val.Company5}</td>
        </tr>
          )}
          
        </tbody>
      </table>
    </div>
     </>
  );
  
};

export default Y2021;

