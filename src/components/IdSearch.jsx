import React, { useState } from "react";

const IdSearch = ({ setId }) => {
  const [idChar, setIdChar] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(idChar);
    console.log(idChar);
  };

  return (
    <form className="idSearch" onSubmit={handleSubmit}>
      <h2>Id:</h2>
      <input
        type="text"
        name="id"
        id="idCharacter"
        onChange={(e) => setIdChar(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default IdSearch;