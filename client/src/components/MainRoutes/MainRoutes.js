import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchaBar from "../SearchDates/SearchaBar";
import "./mainRouter.css";
import "../ListCard/ListCard";
import ListCard from "../ListCard/ListCard";
const MainRoutes = () => {
  return (
    <>
      <div className="main-Router-Container">
        <Navbar />
        <SearchaBar />
        <div className="background-image-car"></div>
      </div>
      <div className="list-card">
        <ListCard />
      </div>
    </>
  );
};

export default MainRoutes;
