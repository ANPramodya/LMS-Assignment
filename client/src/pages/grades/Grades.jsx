import React from "react";
import "./grades.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import List from "../../components/list/List";

const Grades = () => {
  return (
    <div className="grades">
      <SideNav />
      <div className="gradesContainer">
        <TopNav />
        <div className="title">Grades</div>
        <div className="table">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Grades;
