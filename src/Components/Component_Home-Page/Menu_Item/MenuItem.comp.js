import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.style.scss";

const MenuItem = ({ match, ...otherdata }) => {
  console.log("otherdataotherdata", otherdata)
  return (
    <div
      className={`menu-item ${otherdata.size || ""} `}
      onClick={() => {
        otherdata.history.push(`${otherdata.linkUrl}`);
        console.log("otherdata.history",otherdata)
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `URL(${otherdata.imageUrl})` }}
      ></div>

      <div className="content">
        <h1 className="title">{otherdata.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
