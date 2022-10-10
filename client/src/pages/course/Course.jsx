import React from "react";
import "./course.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";

function Course() {
  return (
    <div className="course">
      <SideNav />
      <div className="courseContainer">
        <TopNav />
        Courses
      </div>
    </div>
  );
}

export default Course;
