import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Filter from "./Filter.js";
import props from "prop-types";
import "./Filter.css";

const Y2016HigherStudies = (props) => {
  const[placeData,setData] = useState([])
  useEffect(()=>{
    try {
      axios.get('http://localhost:3031/2016higherstudies')
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
    <h1 align="center" className="head">Students Selected for Higher Study(2016)</h1>
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

export default Y2016HigherStudies;
