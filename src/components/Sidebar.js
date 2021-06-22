import React, { useState, Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Logo from "../assets/happypet.png";
import Patinha from "../assets/patinha.png";
import { logout } from "../services/auth";

const Nav = styled.div`
  background: #1d235d;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 300px;
  align-items: center;
`;

const ImgPat = styled.img`
  width: 65px;
  align-items: center;
`;

const NavExit = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #1d235c;
  width: 280px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = (e) => {
    logout();
    this.props.history.push("/");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <div className="logo-nav d-flex">
            <Img src={Logo} alt="Happy logo" className="img  d-none d-lg-block" />
            <ImgPat src={Patinha} alt="Patinha logo" className="imgPat" />
          </div>
          <NavExit>
            <ImIcons.ImExit onClick={handleLogout.logout} />
          </NavExit>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
