import React from "react";
import "./Statistic.css";
import  {useState, useEffect } from "react";
import Chart from "react-apexcharts";


function Statistic() {
  console.log("hi");
  const [branchname, setbranchname]= useState([]);
  const [totalplaced1, settotalplaced1]= useState([]);
  const [totalplaced2, settotalplaced2]= useState([]);
  const [totalplaced3, settotalplaced3]= useState([]);

  useEffect( ()=>{

    const name=[];
    const valuee1=[];
    const valuee2=[];
    const valuee3=[];

    const getSocialrecord= async()=>{
      const dataReq= await fetch("http://localhost:3031/statistic");
      const dataRes= await dataReq.json();
      //console.log(dataRes);

      for(let i=0; i<dataRes.length; i++)
      {
        name.push(dataRes[i].year);
        valuee1.push(dataRes[i].min);
        valuee2.push(dataRes[i].max);
        valuee3.push(dataRes[i].avg);

      }
      setbranchname(name);
      settotalplaced1(valuee1);
      
      settotalplaced2(valuee2);
      settotalplaced3(valuee3);
 }
  getSocialrecord();

  },[]);

  return (
    <>
    {/* <label className="head1">Heading1</label> */}
      <React.Fragment>
      <div className="bar1">

      
        <Chart
          type="bar"
          width={1500}
          height={500}
          series={[
            
            {
             
              name: "Min",
              data: totalplaced1,
              // color:'#22d319',
               
            },
          
            {
              name: "Max",
              data: totalplaced2,
              // color:'red',
            },
            {
              name: "Avg",
              data: totalplaced3,
              // color:'yellow',
            },]
          }
          
          options={{
            title:{
              text:"Yearwise Statistic of Packages",
              style:{color:"#031358",fontSize:30},
            },
            colors: ['#C0E9EF','#C8C7F7','#D0A4FF'],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: branchname,
              
            },

            yaxis: {
                labels: {
                  formatter: (val) => {
                  return `${val}`;
                  },
                style: { fontSize: "15", 
                                },
                              },
                                title:{
                                  text:"Packages(Min/Max/Avg)",
                                  style:{color:"black",fontSize:20},
                  
                                },
                
              
                 
            },

            legend: {
              show: true,
              position: "right",

            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                // colors: ["#f4f4f4"],
                fontSize: 15,
                
              },
              
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
    <div className="xlabel">
      <label>Year</label>
    </div>
  
    </>
  );
};

export default Statistic;


// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import {Bar} from 'react-chartjs-2'

// const Statistic = () => {
//     const [chartData, setChartData]  = useState({});
//     const [employeeSalary, setEmployeeSalary] = useState([]);
//     const [employeeAge, setEmployeeAge] = useState([]);

//  const Chart = () => {
//         let empSal = [];
//         let empAge = [];

        
//         axios.get("http://localhost:3031/statistic")
//         .then(res => {
//             console.log(res);
//             for(const dataObj of res.data.data){
//                 empSal.push(dataObj.year);
//                 empAge.push(parseInt(dataObj.min ));

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
//                                                  'rgba(255, 99, 132, 0.2)',
//                                                  'rgba(54, 162, 235, 0.2)',
//                                                  'rgba(255, 206, 86, 0.2)',
//                                                  'rgba(75, 192, 192, 0.2)',
//                                                  'rgba(153, 102, 255, 0.2)',
//                                                  'rgba(255, 159, 64, 0.2)',
//                                                  'rgba(255, 99, 132, 0.2)',
//                                                  'rgba(54, 162, 235, 0.2)',
//                                                  'rgba(255, 206, 86, 0.2)',
//                                                  'rgba(75, 192, 192, 0.2)',
//                                                  'rgba(153, 102, 255, 0.2)',
//                                                  'rgba(255, 159, 64, 0.2)',
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
//                                                  'rgba(255, 99, 132, 1)',
//                                                  'rgba(54, 162, 235, 1)',
//                                                  'rgba(255, 206, 86, 1)',
//                                                  'rgba(75, 192, 192, 1)',
//                                                  'rgba(153, 102, 255, 1)',
//                                                  'rgba(255, 159, 64, 1)',
//                                                  'rgba(255, 99, 132, 1)',
//                                                  'rgba(54, 162, 235, 1)',
//                                                  'rgba(255, 206, 86, 1)',
//                                                  'rgba(75, 192, 192, 1)',
//                                                  'rgba(153, 102, 255, 1)',
//                                                  'rgba(255, 159, 64, 1)',
//                                                  'rgba(255, 99, 132, 1)',
//                                                  'rgba(54, 162, 235, 1)',
//                                                  'rgba(255, 206, 86, 1)',
//                                                  'rgba(75, 192, 192, 1)',
//                                                  'rgba(153, 102, 255, 1)',
//                                                  'rgba(255, 159, 64, 1)',
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
//                   {/* <Bar
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
//                   /> */}
//               </div>
//           </div>
//       )
// }

// export default Statistic;