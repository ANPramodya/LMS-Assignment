import React from "react";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { BiBell, BiHelpCircle, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiFillFire } from "react-icons/ai";

function TopNav() {
  return (
    <div>
      <List>
        {/* <AiFillFire /> */}
        <div className="searchbar">
          <input
            type="text"
            className="input-search"
            placeholder="Search anything"
          />
          <BiSearch />
        </div>
        <div className="user-email">
          <p>anpramodya@gmail.com</p>
        </div>

        <CgProfile />
        <HiOutlineMail />
        <BiBell />

        <BiHelpCircle />
      </List>
    </div>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100vw;
  background-color: #262837;
  justify-content: right;
  align-items: center;

  svg {
    color: #a1a1a1;
    font-size: 25px;
    margin-left: 10px;
    margin-right: 20px;
  }
  svg:hover {
    color: white;
    cursor: pointer;
  }
  .searchbar {
    position: fixed;
    left: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input-search {
    width: 400px;
    height: 30px;
    border: none;
    border-radius: 20px;
    padding-left: 30px;
    background: #dfdfdf;
    font-size: 15px;
    font-weight: 500;
  }
  .user-email {
    color: #a1a1a1;
    margin-right: 5px;
  }
`;

export default TopNav;
