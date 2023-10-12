import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter.js";
import props from "prop-types";
import "./Filter.css";
const Y2019higher = (props) => {
  const[placeData,setData] = useState([])
//2018 companywise
  useEffect(()=>{
      try {
        axios.get('http://localhost:3031/2019higherstudies')
        .then((response)=>{
          setData(response.data);
          });
         } catch (err) {
        console.log(err)
      }
  },[])
  return (
    <>
      <div className="app-container">
      <h1 align="center" className="head">Students Opted for Higher Study(2019)</h1>
      <table>
        <thead>
          <tr>
            <th>Srno</th>
            <th>College ID</th>
            <th>Name of Selected Student</th>
          </tr>
        </thead>
        <tbody>
          {placeData.map((val)=>
          <tr>
          <td>{val.SrNo}</td>
          <td>{val.College_ID}</td>
          <td>{val.Name}</td>
        </tr>
          )}
          
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Y2019higher;
