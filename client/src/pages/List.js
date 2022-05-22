import React from "react";
import { CoffeeListing } from "../components";

const List = ({ coffeeList }) => {
  return (
    <div>
      <CoffeeListing coffeeList={coffeeList} />
    </div>
  );
};

export default List;
