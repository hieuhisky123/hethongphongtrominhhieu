import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHeart, FaTimes } from "react-icons/fa"; // Import thêm FaTimes icon để làm nút đóng
import mn1 from "../../../acsset/slice/mn1.png";
import mlogo1 from "../../../acsset/slice/Logo 1.png";
import { Crecontext } from "../../providertocar";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { car } = useContext(Crecontext);
  const wishlistCount = car.length;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShow = () => {
    setNavList(!navList);
  };

  const handleCloseMenu = () => {
    setNavList(false);
  };

  return (
    <Wapper>
      <Container scrollPosition={scrollPosition}>
        <LogoImg>
          <Link to={"/"}>
            <img src={mlogo1} alt="Logo" />
          </Link>
        </LogoImg>
        <LogoImgio>
          <Link to={"/"}>
            <img src={mlogo1} alt="Logo" />
          </Link>
        </LogoImgio>
        <MenuLeft>
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <Menudestop scrollPosition={scrollPosition} key={index}>
                <NavLink exact={list.path === "/"} key={index} to={list.path}>
                  <p>{list.text}</p>
                </NavLink>
              </Menudestop>
            ))}
          </ul>
        </MenuLeft>

        <MenuMobileButton onClick={handleShow}>
          {navList ? <FaTimes size={24} /> : <img src={mn1} alt="menu" />}
        </MenuMobileButton>

        <ConMenumobileConten navList={navList}>
          <div>
            {nav?.map((item, index) => (
              <HoverStyled key={index}>
                <NavLink to={item.path} onClick={handleCloseMenu}>
                  <p>{item.text}</p>
                </NavLink>
              </HoverStyled>
            ))}
          </div>
        </ConMenumobileConten>
      </Container>
    </Wapper>
  );
};

export default Header;

// Styled components
const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  background-color: transparent !important;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 60px;
  background: ${(props) =>
    props.scrollPosition > 50 ? "rgba(255, 255, 255, 0.8)" : ""};
  position: relative;
  @media screen and (min-width: 320px) and (max-width: 840px) {
    height: 80px;
  }
`;

const Menudestop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  .active {
    color: #826112;
  }
  a {
    color: ${(props) => (props.scrollPosition > 50 ? "#000" : "#fff")};
    text-align: center;
    font-family: "Work Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const MenuMobileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 2px;
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 840px) {
    display: none;
  }
`;

const ConMenumobileConten = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw; /* Cover full viewport width */
  background: rgba(0, 0, 0, 0.7); /* Dark overlay background */
  transition: transform 0.5s ease;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  transform: ${(props) =>
    props.navList ? "translateX(0)" : "translateX(100%)"};

  > div {
    background: #fff;
    width: 50%; /* Sidebar takes up 50% of the viewport width */
    height: 100%;
    padding: 20px;
  }
`;

const MenuLeft = styled.div`
  @media screen and (min-width: 320px) and (max-width: 840px) {
    display: none;
  }
`;

const HoverStyled = styled.div`
  padding: 15px;
  margin-top: 20px;
  p {
    color: rgba(17, 16, 16, 1);
    text-align: left;
    font-family: "Work Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &:hover {
    background: #ccc;
  }
`;

const LogoImgio = styled.div`
  @media screen and (min-width: 320px) and (max-width: 460px) {
    display: none;
  }
  img {
    width: 100%;
  }
`;

const LogoImg = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  @media screen and (min-width: 460px) {
    width: 500px;
    display: none;
  }
`;
