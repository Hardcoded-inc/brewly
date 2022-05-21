import React from "react";

const items = [{ name: "My fav coffies" }, { name: "account setting" }];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {items.map((item) => (
        <div className="sidebar__item">{item.name}</div>
      ))}
    </div>
  );
};

export default Sidebar;
