import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchaBar from "../SearchDates/SearchaBar";
import "./mainRouter.css";
const MainRoutes = () => {
  return (
    <div className="main-Router-Container">
      <Navbar />
      <div className="background-image-car">
        <SearchaBar />
      </div>
    </div>
  );
};

export default MainRoutes;
