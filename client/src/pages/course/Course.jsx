import React from "react";
import "./course.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import Enroll from "./Enroll";

const Course = () => {
  //temporary data

  return (
    <div className="course">
      <SideNav />
      <div className="courseContainer">
        <TopNav />
        <div className="cardTitle">
          <span className="dashboard">Courses</span>
          <Link
            to={"/course/enroll"}
            element={<Enroll />}
            style={{ textDecoration: "none" }}
          >
            <span className="add">Enroll</span>
          </Link>
        </div>
        <div className="cards">
          <div className="up">
            <Card course="1" />
            <Card course="2" />
            <Card course="3" />
          </div>
          <div className="down">
            <Card course="4" />
            <Card course="5" />
            <Card course="6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
