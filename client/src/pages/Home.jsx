import React from "react";
import SideNav from "../components/SideNav";
import styled from "styled-components";
import TopNav from "../components/TopNav";

function Home() {
  return (
    <div>
      <Body>
        <TopNav />
        <SideNav />
      </Body>
    </div>
  );
}

const Body = styled.div`
  background-color: #333645;
`;

export default Home;
