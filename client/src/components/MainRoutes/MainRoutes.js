import React from "react";

import "./mainRouter.css";
import "../ListCard/ListCard";
import ListCard from "../ListCard/ListCard";

const MainRoutes = () => {
  return (
    <div>
      <div>
        <div className="main-Router-Container">
          <div className="background-image-car"></div>
        </div>
        <div className="list-card">
          <ListCard />
        </div>
      </div>
    </div>
  );
};

export default MainRoutes;
