import React from "react";
import "./searchbar.css";

const SearchaBar = () => {
  let today = new Date();
  let from =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let until =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    (today.getDate() + 2);
  return (
    <div className="searchBar">
      <form className="searchForm">
        <label>
          Where
          <br />
          <input
            className="input-dates"
            type="text"
            name="search"
            value=""
            placeholder="Search..."
          ></input>
        </label>
        <label>
          From
          <br />
          <input
            className="input-dates"
            type="date"
            name="trip-start"
            value={`${from}`}
            placeholder="Search..."
          ></input>
          <input className="input-dates" type="time" value="10:00 AM"></input>
        </label>
        <label>
          Until
          <br />
          <input
            className="input-dates"
            type="date"
            name="trip-end"
            value={`${until}`}
            placeholder="Search..."
          ></input>
          <input className="input-dates" type="time" value="10:00 AM"></input>
        </label>

        <img
          className="search-image"
          src="https://img.icons8.com/color/48/000000/search--v1.png"
          alt="search-logo"
        />
      </form>
    </div>
  );
};

export default SearchaBar;
