import React from "react";
import SideNav from "../../components/sidenav/SideNav";
import "./home.scss";
import TopNav from "../../components/topnav/TopNav";

function Home() {
  return (
    <div className="home">
      <SideNav />
      <div className="homeContainer">
        <TopNav />
        DashBoard
      </div>
    </div>
  );
}

export default Home;
