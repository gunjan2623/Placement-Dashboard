
import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter.js";
import "./year.css";

const Y2019 = () => {
  const year =2019;
  const[placeData,setData] = useState([])
//2019 all
  useEffect(()=>{
      try {
        axios.get('http://localhost:3031/2019all')
        .then((response)=>{
          setData(response.data);
          });
         } catch (err) {
        console.log(err)
      }
  },[])
  return (
    <>
    <Filter year={2019}/>
    <div className="app-container">
      <h1 align="center" className="head">All Students(2019)</h1>
      <table>
        <thead>
          <tr>
            <th>Srno</th>
            <th>Name</th>
            <th>Company 1</th>
            <th>Company 2</th>
            <th>Company 3</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody>
          {placeData.map((val)=>
          <tr>
          <td>{val.SrNo}</td>
          <td>{val.Name_of_Eligible_Student}</td>
          <td>{val.Company1}</td>
          <td>{val.Company2}</td>
          <td>{val.Company3}</td>
          <td>{val.Package}</td>
        </tr>
          )}
          
        </tbody>
      </table>
    </div>
     </>
  );
  
};

export default Y2019;

