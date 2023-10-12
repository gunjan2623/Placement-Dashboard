import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Filter from "./Filter.js";
import props from "prop-types";
import "./Filter.css";
const Y2021placedind = (props) => {
  const[placeData,setData] = useState([])
  useEffect(()=>{
    try {
      axios.get('http://localhost:3031/20211all')
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
      <h1 align="center" className="head">Individual Placement(2021)</h1>
      <table>
        <thead>
          <tr>
          <th>Name</th>

            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {placeData.map((val)=>
          <tr>
          <td>{val.Name}</td>
          <td>{val.Company1}</td>
        </tr>
          )}
          
        </tbody>
      </table>
    </div>
    </>
  );
};
export default Y2021placedind;
