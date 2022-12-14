import React from "react";
import "./dashboard.scss";
import TopNav from "../../components/topnav/TopNav";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import NewCourse from "../newCourse/NewCourse";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <TopNav />
      <div className="dashboardContainer">
        <div className="top">
          <div className="myCourse">
            <span className="courses">My Courses</span>
            <Link
              to={"/lms/new"}
              element={<NewCourse />}
              style={{ textDecoration: "none" }}
            >
              <span className="addNew" onClick={{}}>
                Add New
              </span>
            </Link>
          </div>

          <div className="cards">
            <Card course="1" className="card" />
            <Card course="2" className="card" />
            <Card course="3" className="card" />
            <Card course="4" className="card" />
            <Card course="5" className="card" />
            <Card course="6" className="card" />
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <div className="tiletitle">Upcoming Activities</div>
          </div>
          <div className="right">
            <div className="tiletitle">Overall Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
