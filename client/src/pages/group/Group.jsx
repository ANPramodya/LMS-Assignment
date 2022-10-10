import React from "react";
import "./group.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";

const Group = () => {
  return (
    <div className="group">
      <SideNav />
      <div className="groupContainer">
        <TopNav />
        Groups
      </div>
    </div>
  );
};

export default Group;
