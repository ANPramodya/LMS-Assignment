import React from "react";
import "./logout.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";

const Logout = () => {
  return (
    <div className="logout">
      <SideNav />
      <div className="logoutContainer">
        <TopNav />
        Logout
      </div>
    </div>
  );
};

export default Logout;
