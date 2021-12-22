import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "../MainRoutes/MainRoutes";

const AppRouter = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default AppRouter;
