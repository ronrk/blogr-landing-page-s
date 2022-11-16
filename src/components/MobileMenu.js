import React from "react";
import Wrapper from "./styled/MobileMenu.styled";
import { ReactComponent as IconArrow } from "../assets/images/icon-arrow-dark.svg";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Wrapper className={isMenuOpen ? "show" : ""}>
      <ul className="menu__links">
        <li>
          <span className="menu__link-title">Product</span>
          <IconArrow className="menu__link-icon" />
          <ul className="menu__sublinks">
            <li onClick={toggleMenu}>
              <a href="#">Overview</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#">Pricing</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#">Marketplace</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#">Features</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#">Integrations</a>
            </li>
          </ul>
        </li>

        <li>
          <span className="menu__link-title">Company</span>
          <IconArrow className="menu__link-icon" />
          <ul className="menu__sublinks">
            <li onClick={toggleMenu}>
              <a href="#">About</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#">Team</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#">Blog</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#">Careers</a>
            </li>
          </ul>
        </li>

        <li>
          <span className="menu__link-title">Connect</span>
          <IconArrow className="menu__link-icon" />
          <ul className="menu__sublinks">
            <li onClick={toggleMenu}>
              <a href="#">Contact</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#">Newsletter</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="menu__btns">
        <button className="btn btn-block btn-white menu-btn">Login</button>
        <button className="btn btn-block btn-red menu-btn">Sign Up</button>
      </div>
    </Wrapper>
  );
};

export default MobileMenu;
