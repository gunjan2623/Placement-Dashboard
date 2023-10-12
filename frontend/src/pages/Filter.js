import React, { useState } from "react";

import props from "prop-types";
import "./Filter.css";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
// import YearItems from "./YearItems";

import { useEffect } from "react";

const Filter = (props) => {
  const [selectMenu1, setSelectMenu1] = useState("none");
  const [selectMenu2, setSelectMenu2] = useState(null);
  const [navLinks, setNavLinks] = useState([]);
  const a = props.year;
  const pa = "/placerep/Y" + a + "/" + "Y" + a + selectMenu1 + selectMenu2;
  //console.log(pa);
  const navigate = useNavigate();
  const givePath = () => {
    navigate(pa);
  };
  function openf(e) {
    setSelectMenu1(e.target.value);
  }
  return (
    <>
      <div className="Filter">
        <select value={selectMenu1} className="allcomp" onChange={openf}>
          <option hidden selected value="none" style={{ color: "grey" }}>
            Campus recruitment
          </option>
          <option value="Placed">Placed</option>
          <option value="Unselected">
            Not Eligible / Preparations / Others
          </option>
          <option value="HigherStudies">Higher Studies</option>
        </select>
        <div style={{ display: "inline-block" }}>
          {selectMenu1 === "Placed" ? (
            <select
              value={selectMenu2}
              className="compwise"
              onChange={(e) => setSelectMenu2(e.target.value)}
            >
              <option hidden selected value="none">
                Offers received
              </option>
              <option value="IndividualOffer">Individual Offer</option>
              <option value="MultipleOffer">Multiple Offer</option>
            </select>
          ) : null}
        </div>
        <button className="apply" onClick={givePath}>
          Apply
        </button>
      </div>
    </>
  );
};

export default Filter;
