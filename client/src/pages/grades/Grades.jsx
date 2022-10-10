import React from "react";
import "./grades.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";

const Grades = () => {
  return (
    <div className="grades">
      <SideNav />
      <div className="gradesContainer">
        <TopNav />
        Grades
      </div>
    </div>
  );
};

export default Grades;
