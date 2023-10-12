import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter.js";
import props from "prop-types";
const Y2019placedind = () => {
  const[placeData,setData] = useState([])
  useEffect(()=>{
    try {
      axios.get('http://localhost:3031/20200all')
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
      <h1 align="center" className="head">Individual Placement(2019)</h1>
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
          <td>{val.Student_Name}</td>
          <td>{val.Company1}</td>
        </tr>
          )}
          
        </tbody>
      </table>
    </div>
    </>
  );
};
export default Y2019placedind;
