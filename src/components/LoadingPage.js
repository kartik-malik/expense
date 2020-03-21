import React from "react";
import loader from "../images/loader.gif";
export default () => {
  return (
    <div className="loader">
      <img src={loader} className="loader__image" alt="loading" />
    </div>
  );
};
