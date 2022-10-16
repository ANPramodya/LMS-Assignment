import React from "react";
import "./newCourse.scss";
import TopNav from "../../components/topnav/TopNav";

const NewCourse = () => {
  return (
    <div className="newCourse">
      <TopNav />
      <div className="newCourseContainer">New Courses</div>
    </div>
  );
};

export default NewCourse;
