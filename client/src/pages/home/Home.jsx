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
        <div className="cardTitle">
          <span className="dashboard">Dashboard</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
