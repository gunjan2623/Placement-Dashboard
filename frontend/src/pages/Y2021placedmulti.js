import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Filter from "./Filter.js";
import props from "prop-types";
import "./Filter.css";
const Y2021placedmulti = (props) => {
  const[placeData,setData] = useState([])
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
      <div className="app-container">
      <h1 align="center" className="head"> Multiple Offers(2021)</h1>
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


export default Y2021placedmulti;
