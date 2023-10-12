
import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter.js";
import "./year.css";

const Y2017 = () => {
  const year=2017;
  const[placeData,setData] = useState([])
//2017 companywise
  useEffect(()=>{
      try {
        axios.get('http://localhost:3031/2017Companywise')
        .then((response)=>{
          setData(response.data);
          });
         } catch (err) {
        console.log(err)
      }
  },[])
  return (
    <>
    <Filter year={2017}/>
    <div className="app-container">
      <h1 align="center" className="head">Company Visited(2017)</h1>
      <table>
        <thead>
          <tr>
            <th>Srno</th>
            <th>Name of Company</th>
            <th>Total Selected Students</th>
            <th>Company Visit Date</th>
          </tr>
        </thead>
        <tbody>
          {placeData.map((val)=>
          <tr>
          <td>{val.SrNo}</td>
          <td>{val.Name_of_Company}</td>
          <td>{val.Total_Selected_Students}</td>
          <td>{val.Visit_Date}</td>
        </tr>
          )}
          
        </tbody>
      </table>
    </div>
     </>
  );
  
};

export default Y2017;

