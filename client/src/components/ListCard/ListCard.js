import React from "react";
import Cards from "../Card/Cards";

const ListCard = () => {
  return (
    <>
      <div className="list-card">
        <h1 id="text-main">Find your drive here</h1>
        <h5 id="exploreDR">Explore the best DR rentals marketplace</h5>
      </div>
      <div className="make-brand">
        <h5>Browse by make</h5>
      </div>
      <Cards />
    </>
  );
};

export default ListCard;
