import React from "react";
import CoffeeTile from "./CoffeeTile";

const CoffeeListing = ({ coffeeList }) => {
  return (
    <div className="coffee-listing">
      {coffeeList.map((item) => (
        <CoffeeTile coffee={item} />
      ))}
    </div>
  );
};

export default CoffeeListing;
