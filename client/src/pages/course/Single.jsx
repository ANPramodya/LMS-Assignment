import React from "react";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <SideNav />
      <div className="singleContainer">
        <TopNav />
        <div className="title">Course Details</div>
        <div className="top">
          <div className="left">
            <img
              src="https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80"
              alt=""
              className="image"
            />
          </div>

          <div className="right">
            <p className="details">
              Course ID: <span className="courseId">INTE 14589</span>
            </p>
            <p className="details">
              Course Name:{" "}
              <span className="courseName">Course with No rest</span>
            </p>
            <p className="details">
              Department:{" "}
              <span className="department">Dept. of industrial Management</span>
            </p>
            <p className="details">
              Lecturer: <span className="lecturer">Prof. Rick Sanchez</span>
            </p>
            <button className="enrollBtn"> Enroll</button>
          </div>
        </div>
        <div className="bottom"> Course Content</div>
      </div>
    </div>
  );
};

export default Single;
