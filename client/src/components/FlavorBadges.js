import React from "react";

const FlavorBadges = ({ flavors }) => {
  return (
    <div className="flavor-badges">
      {flavors.map((flavor) => (
        <div className="flavor-badge">{flavor}</div>
      ))}
    </div>
  );
};

export default FlavorBadges;
