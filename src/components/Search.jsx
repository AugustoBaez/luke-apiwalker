import React from "react";

const Search = ({ type }) => {

  console.log(type)

  return (
    <div className="search">
      <h2>Search</h2>
      <select name="opciones" id="characters">
        <option>{type}</option>;
      </select>
    </div>
  );
};

export default Search;