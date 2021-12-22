import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "../MainRoutes/MainRoutes";
import Navbar from "../Navbar/Navbar";
import SearchaBar from "../SearchDates/SearchaBar";
import { Routes, Route } from "react-router-dom";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <SearchaBar />
        <MainRouter />
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
