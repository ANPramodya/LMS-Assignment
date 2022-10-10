import React from "react";
import "./settings.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";

const Settings = () => {
  return (
    <div className="settings">
      <SideNav />
      <div className="settingsContainer">
        <TopNav />
        Settings
      </div>
    </div>
  );
};

export default Settings;
