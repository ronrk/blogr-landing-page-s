import React from "react";
import Wrapper from "./styled/Footer.styled";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Logo className="footer__logo" />
      <ul className="footer__list">
        <span className="footer__title">Product</span>
        <li className="footer__link">
          <a href="#">Overview</a>
        </li>
        <li className="footer__link">
          <a href="#">Pricing</a>
        </li>
        <li className="footer__link">
          <a href="#">Marketplace</a>
        </li>
        <li className="footer__link">
          <a href="#">Features</a>
        </li>
        <li className="footer__link">
          <a href="#">Integrations</a>
        </li>
      </ul>

      <ul className="footer__list">
        <span className="footer__title">Company</span>
        <li className="footer__link">
          <a href="#">About</a>
        </li>
        <li className="footer__link">
          <a href="#">Team</a>
        </li>
        <li className="footer__link">
          <a href="#">Blog</a>
        </li>
        <li className="footer__link">
          <a href="#">Careers</a>
        </li>
      </ul>

      <ul className="footer__list">
        <span className="footer__title">Connect</span>
        <li className="footer__link">
          <a href="#">Contact</a>
        </li>
        <li className="footer__link">
          <a href="#">Newsletter</a>
        </li>
        <li className="footer__link">
          <a href="#">LinkedIn</a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Footer;
