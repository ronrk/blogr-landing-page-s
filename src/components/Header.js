import React from "react";
import Navbar from "./Navbar";
import Wrapper from "./styled/Header.styled";

const Header = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Wrapper>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="header__content">
        <h1 className="header__title">A modern publishing platform</h1>
        <span className="header__text">
          Grow your audience and build your online brand
        </span>
        <div className="header__btns">
          <button className="btn btn-block btn-white">Start for Free</button>
          <button className="btn btn-block btn-transparent">Learn More</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
