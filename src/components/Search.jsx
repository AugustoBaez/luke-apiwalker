import React from "react";

const Search = ({ type }) => {
  return (
    <div className="search">
      <h2>Search</h2>
      <select name="opciones" id="characters">
        <option>{type.people}</option>;
      </select>
    </div>
  );
};

export default Search;