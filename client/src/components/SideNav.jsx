import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdViewModule } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsBarChart } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";

import styled from "styled-components";

function SideNav() {
  return (
    <div>
      <List>
        <MdDashboard />
        <MdViewModule />
        <GoCalendar />
        <HiOutlineUserGroup />
        <BsBarChart />
        <div className="settings-logout">
          <FiSettings />
          <FiLogOut />
        </div>
      </List>
    </div>
  );
}

const List = styled.div`
  background-color: #262837;
  width: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-top: 30px;
  align-items: center;

  .settings-logout {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 10px;
  }

  svg {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 30px;
    color: #a1a1a1;
  }
  svg:hover {
    color: white;
    cursor: pointer;
  }
`;

export default SideNav;
