import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Filter from "./Filter.js";
import props from "prop-types";
import "./Filter.css";
const Y2018placedind = (props) => {
  const[placeData,setData] = useState([])
  useEffect(()=>{
    try {
      axios.get('http://localhost:3031/2018IndividualOffer')
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
      <h1 align="center" className="head">Individual Placement(2018)</h1>
      <table>
        <thead>
          <tr>
            <th>Srno</th>
            <th>Company</th>
            <th>Package</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {placeData.map((val)=>
          <tr>
          <td>{val.SrNo}</td>
          <td>{val.Company_Name}</td>
          <td>{val.Package}</td>
          <td>{val.Selected_Students}</td>
        </tr>
          )}
          
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Y2018placedind;
