import React from "react";
import FlavorBadges from "./FlavorBadges";

const CoffeeTile = ({ coffee }) => {
  return (
    <div className="coffee-tile" key={coffee.id}>
      <img src={coffee.imgUrl}></img>
      <div>
        <h3>{coffee.name}</h3>
        <div>Acidity: {coffee.acidity}</div>
        <div>Bitterness: {coffee.bitterness}</div>
        <div>Sweetness: {coffee.sweetness}</div>
        <FlavorBadges flavors={coffee.flavors} />
      </div>
    </div>
  );
};

export default CoffeeTile;
