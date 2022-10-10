import React from "react";
import "./calender.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";

const Calender = () => {
  return (
    <div className="calender">
      <SideNav />
      <div className="calenderContainer">
        <TopNav />
        Calender
      </div>
    </div>
  );
};

export default Calender;
