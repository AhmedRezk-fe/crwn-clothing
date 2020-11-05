import React from "react";
import "./MenuItem.style.scss";

const MenuItem = ({ ...otherdata }) => (
  <div className={`menu-item ${otherdata.size || ""} `}>
    <div className="background-image"
      style={{ backgroundImage: `URL(${otherdata.imageUrl})` }}
    ></div>

    <div className="content">
      <h1 className="title">{otherdata.title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
