import styled from "styled-components";

const Footer = styled.footer`
  background-color: var(--very-dark-black-blue);
  border-top-right-radius: 10rem;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 4rem 5rem;
  & .footer__list {
    list-style: none;
    height: 100%;
  }
  & .footer__title {
    display: block;
    margin-bottom: 2rem;
    font-size: 1.7rem;
    color: var(--white);
    font-family: var(--font-overpass);
  }
  & .footer__link {
    padding: 0.5rem 0;
  }
  & .footer__link a {
    font-size: 1.3rem;
    text-decoration: none;
    color: var(--grayish-blue);
    font-family: var(--font-overpass);
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    /* justify-content: space-around; */

    & .footer__logo {
      margin-bottom: 4rem;
    }
    & .footer__list {
      margin-bottom: 4rem;
    }
    & .footer__title {
      margin-bottom: 1rem;
    }
  }
`;

export default Footer;
