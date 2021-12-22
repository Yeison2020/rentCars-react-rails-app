import React from "react";

const Cards = ({ link, name, id }) => {
  return (
    <div className="cards-size">
      <img src={`${link}`} alt="make card" />
      <h2>{name}</h2>
    </div>
  );
};

export default Cards;
