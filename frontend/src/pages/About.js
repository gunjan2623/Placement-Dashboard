import React from "react";
import "./About.css";

const About = () => {
  return (
   <div>
    <div className="about">
      <div  className="ab1">
      <h1 align="center">About YCCE</h1>
        <div  classname="ab2"> 
       <h3>  The college is guided by the Academic Advisory Board consisting of eminent academicians from the prestigious technical institutes in India and USA. The college is having well qualified and experienced senior faculty members.  </h3><br></br>
       <h3>  A premier institute, YCCE became one of the few selected well-performing colleges for Government of India's Technical Education Quality Improvement Program (TEQIP Phase I), funded by the World Bank. With the TEQIP financial aid, the Institution has created state-of-the-art infrastructure, laboratories, computational facilities, library etc    </h3><br></br>
       <h3>   YCCE has become the First private engineering college to acquire 'Autonomous' status in Central India. Under the new status, the first batch of students commenced their B.E. and M.Tech. courses from the academic session 2010-2011. In the year 2016-17, UGC peer team visited YCCE & granted ‘Extension of Autonomy’ for 6 years (2016-2022).    </h3><br></br>

      </div>
  
    </div>
    </div>

    </div>
  

  );
};

export default About;

// import { useEffect, useState } from 'react';
// // import './apps.css';
// import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// ChartJs.register(
//   Tooltip, Title, ArcElement, Legend
// );


// const data = {
//     datasets: [{
//         data: [10, 20, 30],
//         backgroundColor:[
//           'red',
//           'blue',
//           'yellow'
//         ]
//     },
//   ],
//   // These labels appsear in the legend and in the tooltips when hovering different arcs
//   labels: [
//       'Red',
//       'Yellow',
//       'Blue'
//   ], 
// };
// function About() {
//   const [data, setData] = useState({
//     datasets: [{
//         data: [10, 20, 30],
//         backgroundColor:[
//           'red',
//           'blue',
//           'yellow'
//         ]
//     },
//   ],
//   labels: [
//       'Red',
//       'Yellow',
//       'Blue'
//   ], 
// });
//   useEffect(()=> {
//     const fetchData = () =>  {
//       fetch('http://localhost:3031/pie').then((data) => {
//         const res = data.json();
//         return res
//       }).then((res) => {
//         console.log("resss", res)
//         const label = [];
//         const data = [];
//         for(var i of res) {
//             label.push(i.value);
//             data.push(i.no)
//         }
//         setData(
//           {
//             datasets: [{
//                 data:data,
//                 backgroundColor:[
//                   'red',
//                   'blue',
//                   'yellow'
//                 ]
//             },
//           ],
//           labels:label, 
//         }
//         )

//       }).catch(e => {
//         console.log("error", e)
//       }) 
//     }
//   fetchData();
//   }, [])
//   return (
//     <div className="apps" style={{width:'30%', height:'30%'}}>
//       <Doughnut data={data}/>
//     </div>
//   );
// }

// export default About;


// import axios from 'axios';
// import  { useState, useEffect } from 'react'
// import {Bar} from 'react-chartjs-2'

// const About = () => {
//     const [chartData, setChartData]  = useState({});
//     // const [employeeSalary, setEmployeeSalary] = useState([]);
//     // const [employeeAge, setEmployeeAge] = useState([]);

//  const Chart = () => {
//         let empSal = [];
//         let empAge = [];

//         axios.get("http://localhost:3031/college")
//         .then(res => {
//             console.log(res);
//             for(const dataObj of res.data.data){
//                 empSal.push(parseInt(dataObj.Branch_Name));
//                 empAge.push(parseInt(dataObj.Total_placed ));

//             }
//             setChartData({
//                 labels: empAge,
//                 datasets: [{
//                                              label: 'level of thicceness',
//                                              data: empSal,
//                                              backgroundColor: [
//                                                  'rgba(255, 99, 132, 0.2)',
//                                                  'rgba(54, 162, 235, 0.2)',
//                                                  'rgba(255, 206, 86, 0.2)',
//                                                  'rgba(75, 192, 192, 0.2)',
//                                                  'rgba(153, 102, 255, 0.2)',
//                                                  'rgba(255, 159, 64, 0.2)',
//                                              ],
//                                              borderColor: [
//                                                  'rgba(255, 99, 132, 1)',
//                                                  'rgba(54, 162, 235, 1)',
//                                                  'rgba(255, 206, 86, 1)',
//                                                  'rgba(75, 192, 192, 1)',
//                                                  'rgba(153, 102, 255, 1)',
//                                                  'rgba(255, 159, 64, 1)',
//                                                 //  'rgba(255, 99, 132, 1)',
//                                                 //  'rgba(54, 162, 235, 1)',
//                                                 //  'rgba(255, 206, 86, 1)',
//                                                 //  'rgba(75, 192, 192, 1)',
//                                                 //  'rgba(153, 102, 255, 1)',
//                                                 //  'rgba(255, 159, 64, 1)',
//                                                 //  'rgba(255, 99, 132, 1)',
//                                                 //  'rgba(54, 162, 235, 1)',
//                                                 //  'rgba(255, 206, 86, 1)',
//                                                 //  'rgba(75, 192, 192, 1)',
//                                                 //  'rgba(153, 102, 255, 1)',
//                                                 //  'rgba(255, 159, 64, 1)',
//                                                 //  'rgba(255, 99, 132, 1)',
//                                                 //  'rgba(54, 162, 235, 1)',
//                                                 //  'rgba(255, 206, 86, 1)',
//                                                 //  'rgba(75, 192, 192, 1)',
//                                                 //  'rgba(153, 102, 255, 1)',
//                                                 //  'rgba(255, 159, 64, 1)',
//                                              ],
//                                              borderWidth: 1
//                                          }]
//             });
//         })
//         .catch(err =>{
//             console.log(err);
//         })
        
//     }
//     useEffect(() => {
//         Chart();
//       }, []);
//       return(
//           <div className="App">
//               <h1>Bar Chart</h1>
//               <div>
//                   <Bar
//                     data={chartData}
//                     options={{
//                         responsive:true,
//                         title: { text: "THICCNESS SCALE", display: true },
//                         scales:{
//                             yAxes:{
//                                 ticks:{
//                                     beginAtZero: true
//                                 }
//                             }
//                         }
//                     }}
//                   />
//               </div>
//           </div>
//       )
// }

// export default About;