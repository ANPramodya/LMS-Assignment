import React from "react";
import "./details.scss";
import TopNav from "../../components/topnav/TopNav";
import SideNav from "../../components/sidenav/SideNav";
const Details = () => {
  return (
    <div className="details">
      <SideNav />
      <TopNav />

      <div className="detailsContainer">Details</div>
    </div>
  );
};

export default Details;
