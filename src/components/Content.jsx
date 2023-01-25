import React from "react";

const Content = ({ type }) => {
  return (
    <div className="content">
      <h2>Content</h2>
      <h3>{type}</h3>
    </div>
  );
};

export default Content;