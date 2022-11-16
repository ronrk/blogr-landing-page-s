import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as IconArrow } from "../assets/images/icon-arrow-light.svg";
import { ReactComponent as IconHamburger } from "../assets/images/icon-hamburger.svg";
import { ReactComponent as IconClose } from "../assets/images/icon-close.svg";
import Wrapper from "./styled/Navbar.styled";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Wrapper>
      <Logo className="nav__logo" />
      <ul className="nav__links">
        <li>
          <span className="nav__link-title">Product</span>
          <IconArrow className="nav__link-icon" />
          <ul className="nav__sublinks">
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
          </ul>
        </li>

        <li>
          <span className="nav__link-title">Company</span>
          <IconArrow className="nav__link-icon" />
          <ul className="nav__sublinks">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </li>

        <li>
          <span className="nav__link-title">Connect</span>
          <IconArrow className="nav__link-icon" />
          <ul className="nav__sublinks">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="nav__btns">
        <button className="btn btn-block btn-transparent">Login</button>
        <button className="btn btn-block btn-white">Sign Up</button>
      </div>
      <button className="menu-btn btn" onClick={toggleMenu}>
        {isMenuOpen ? (
          <IconClose className="menu__icon" />
        ) : (
          <IconHamburger className="menu__icon" />
        )}
      </button>
    </Wrapper>
  );
};

export default Navbar;
