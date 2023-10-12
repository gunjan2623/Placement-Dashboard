import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavItems from "./components/Navbar/NavItems";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Statistic from "./pages/Statistic";
import PlacementReports from "./pages/PlacementReports";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Filter from "./pages/Filter";
import Y2016 from "./pages/Y2016";
import Y2021 from "./pages/Y2021";
import Y2020 from "./pages/Y2020";
import Y2018 from "./pages/Y2018";
import Y2019 from "./pages/Y2019";
import Y2017 from "./pages/Y2017";
import Y2018HigherStudies from "./pages/Y2018HigherStudies";
import Y2019higher from "./pages/Y2019higher";
import Y2017higher from "./pages/Y2017higher";
import Y2016higher from "./pages/Y2016higher";
import Y2020higher from "./pages/Y2020higher";
import Y2021higher from "./pages/Y2021higher";
import Y2016unplaced from "./pages/Y2016unplaced";
import Y2017unplaced from "./pages/Y2017unplaced";
import Y2018unplaced from "./pages/Y2018unplaced";
import Y2019unplaced from "./pages/Y2019unplaced";
import Y2020unplaced from "./pages/Y2020unplaced";
import Y2021unplaced from "./pages/Y2021unplaced";
import Y2016placedind from "./pages/Y2016placedind";
import Y2017placedind from "./pages/Y2017placedind";
import Y2018placedind from "./pages/Y2018placedind";
import Y2019placedind from "./pages/Y2019placedind";
import Y2020placedind from "./pages/Y2020placedind";
import Y2021placedind from "./pages/Y2021placedind";
import Y2016placedmulti from "./pages/Y2016placedmulti";
import Y2017placedmulti from "./pages/Y2017placedmulti";
import Y2018placedmulti from "./pages/Y2018placedmulti";
import Y2019placedmulti from "./pages/Y2019placedmulti";
import Y2020placedmulti from "./pages/Y2020placedmulti";
import Y2021placedmulti from "./pages/Y2021placedmulti";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/placerep" element={<PlacementReports />} />
          <Route exact path="/placerep/Y2021" element={<Y2021 />} />
          <Route exact path="/placerep/Y2020" element={<Y2020 />} />
          <Route exact path="/placerep/Y2019" element={<Y2019 />} />
          <Route exact path="/placerep/Y2018" element={<Y2018 />} />
          <Route exact path="/placerep/Y2017" element={<Y2017 />} />
          <Route exact path="/placerep/Y2016" element={<Y2016 />} />
          <Route exact path="/statistics" element={<Statistic />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/placerep/Y2021/Y2021HigherStudiesnull"
            element={<Y2021higher />}
          />

          <Route
            exact
            path="/placerep/Y2016/Y2016HigherStudiesnull"
            element={<Y2016higher />}
          />
          <Route
            exact
            path="/placerep/Y2017/Y2017HigherStudiesnull"
            element={<Y2017higher />}
          />
          <Route
            exact
            path="/placerep/Y2018/Y2018HigherStudiesnull"
            element={<Y2018HigherStudies />}
          />
          <Route
            exact
            path="/placerep/Y2019/Y2019HigherStudiesnull"
            element={<Y2019higher />}
          />
          <Route
            exact
            path="/placerep/Y2020/Y2020HigherStudiesnull"
            element={<Y2020higher />}
          />
          <Route
            exact
            path="/placerep/Y2021/Y2021HigherStudiesnull"
            element={<Y2021higher />}
          />
          <Route
            exact
            path="/placerep/Y2016/Y2016Unselectednull"
            element={<Y2016unplaced />}
          />
          <Route
            exact
            path="/placerep/Y2017/Y2017Unselectednull"
            element={<Y2017unplaced />}
          />
          <Route
            exact
            path="/placerep/Y2018/Y2018Unselectednull"
            element={<Y2018unplaced />}
          />
          <Route
            exact
            path="/placerep/Y2019/Y2019Unselectednull"
            element={<Y2019unplaced />}
          />
          <Route
            exact
            path="/placerep/Y2020/Y2020Unselectednull"
            element={<Y2020unplaced />}
          />
          <Route
            exact
            path="/placerep/Y2021/Y2021Unselectednull"
            element={<Y2021unplaced />}
          />
          <Route
            exact
            path="/placerep/Y2016/Y2016placedIndividualOffer"
            element={<Y2016placedind />}
          />
          <Route
            exact
            path="/placerep/Y2017/Y2017placedIndividualOffer"
            element={<Y2017placedind />}
          />
          <Route
            exact
            path="/placerep/Y2018/Y2018placedIndividualOffer"
            element={<Y2018placedind />}
          />
          <Route
            exact
            path="/placerep/Y2019/Y2019placedIndividualOffer"
            element={<Y2019placedind />}
          />
          <Route
            exact
            path="/placerep/Y2020/Y2020placedIndividualOffer"
            element={<Y2020placedind />}
          />
          <Route
            exact
            path="/placerep/Y2021/Y2021placedIndividualOffer"
            element={<Y2021placedind />}
          />
          <Route
            exact
            path="/placerep/Y2016/Y2016placedMultipleOffer"
            element={<Y2016placedmulti />}
          />
          <Route
            exact
            path="/placerep/Y2017/Y2017placedMultipleOffer"
            element={<Y2017placedmulti />}
          />
          <Route
            exact
            path="/placerep/Y2018/Y2018placedMultipleOffer"
            element={<Y2018placedmulti />}
          />
          <Route
            exact
            path="/placerep/Y2019/Y2019placedMultipleOffer"
            element={<Y2019placedmulti />}
          />
          <Route
            exact
            path="/placerep/Y2020/Y2020placedMultipleOffer"
            element={<Y2020placedmulti />}
          />
          <Route
            exact
            path="/placerep/Y2021/Y2021placedMultipleOffer"
            element={<Y2021placedmulti />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
