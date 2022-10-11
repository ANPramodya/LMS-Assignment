import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard, MdViewModule } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsBarChart } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";
import "./sidenav.scss";

function SideNav() {
  return (
    <div className="sidenav">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">Sparkle</span>
        </Link>
      </div>

      <div className="center">
        <ul>
          <Link to={"/dashboard"} style={{ color: "#a1a1a1" }}>
            <li>
              <MdDashboard />
            </li>
          </Link>
          <Link to={"/course"} style={{ color: "#a1a1a1" }}>
            <li>
              <MdViewModule />
            </li>
          </Link>
          <Link to={"/calender"} style={{ color: "#a1a1a1" }}>
            <li>
              <GoCalendar />
            </li>
          </Link>
          <Link to={"/groups"} style={{ color: "#a1a1a1" }}>
            <li>
              <HiOutlineUserGroup />
            </li>
          </Link>
          <Link to={"/grades"} style={{ color: "#a1a1a1" }}>
            <li>
              <BsBarChart />
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <Link to={"/settings"} style={{ color: "#a1a1a1" }}>
            <li>
              <FiSettings />
            </li>
          </Link>
          <Link to={"/logout"} style={{ color: "#a1a1a1" }}>
            <li>
              <FiLogOut />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
