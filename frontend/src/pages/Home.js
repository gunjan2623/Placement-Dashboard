import React from "react";
import "../App.css";
import "./Home.css";
import {CiCalendar } from "react-icons/ci";
import  {useState, useEffect } from "react";
import Chart from "react-apexcharts";
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

function Home() {
  console.log("hi");
  const [branchname, setbranchname]= useState({});
  const [totalplaced, settotalplaced]= useState([]);

  useEffect( ()=>{

    const name=[];
    const valuee=[];

    const getSocialrecord= async()=>{
      const dataReq= await fetch("http://localhost:3031/college");
      const dataRes= await dataReq.json();
      //console.log(dataRes);

      for(let i=0; i<dataRes.length; i++)
      {
        name.push(dataRes[i].Branch_Name);
        valuee.push(dataRes[i].Total_placed);

      }
      setbranchname(name);
      settotalplaced(valuee);
 }
  getSocialrecord();
  
  },[]);
        
const[contryname,setCountaryname]=useState([]);
const[medal,setMedal]=useState([]);

useEffect(()=>{
  const getdata =async()=>{
    const contryname=[];
    const getmedal=[];
    const reqData = await fetch('http://localhost:3031/pie');
    const resData = await reqData.json();
    // console.log(resData);
    for(let i=0;i<resData.length ; i++)
    {
      contryname.push(resData[i].value);
      getmedal.push(resData[i].no);;
    }
        setCountaryname(contryname);
        setMedal(getmedal);

  }
  getdata();
},[]);
  return (
    // ------------------------------------------------------
    
    <>
    <div className="home1">
    <React.Fragment>
      <div className="apps">
        <div className="hh"><h2>Packages</h2></div>
        
        <Chart
        type="donut"
        width={500}
        height={500}
    
        series={medal}
        
        options={{
          colors:['#C0E9EF','#C8C7F7','#D0A4FF'],
          labels:contryname,
          title:{
            text:""
          },
          plotOptions:{

            pie:{
              
              donut:{
                
                labels:{
                  show:true,
                  total:{
                    show:true,
                    showAlways:true,
                    fontSize:30,
                    color:"#00008B",
                  }
                  
                }
              }
            }


          },

          dataLabels:{
            enabled:true,
          }
        }}
        />
      </div>
      </React.Fragment>



        <div className="featuredItem1">
          <span className="Student"><b>2021</b></span>
          
           
            <div className="StudentContainer">
                <span className="Sicon"> <CiCalendar className="icon"></CiCalendar></span>
                <span className="number1">132</span>
            </div>
          </div>


          <div className="featuredItem2">
            <span className="Student"><b>2020</b></span>
            <div className="StudentContainer">
                <span className="Sicon"><CiCalendar className="icon"></CiCalendar> </span>
                <span className="number1">98</span>
            </div>
        </div>

        <div className="featuredItem3">
            <span className="Student"><b>2019</b></span>
            <div className="StudentContainer">
                <span className="Sicon"><CiCalendar className="icon"></CiCalendar> </span>
                <span className="number1">89</span>
            </div>
            
        </div>
        <React.Fragment>
      <div className="bar">
      
        <Chart
          type="bar"
          width={1000}
          height={300}
          series={[
            {
              name: "",
              data: totalplaced,
            },
          ]}
          options={{
           

            colors: ["#8884d8"],
            theme: { mode: "light" },
            
            xaxis: {
              tickPlacement: "on",
              categories: branchname,
              
              title: {
                style: { color: "#8884d8", fontSize: 30 },
              },
            },

            yaxis: {
                labels: {
                  formatter: (val) => {
                  return `${val}`;
                  },
                style: { fontSize: "15", colors: ["#8884d8"] },
              },
                 title: {
                 style: { color: "#8884d8", fontSize: 15 },
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
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
    
     </div>
</>

  );
};

export default Home;