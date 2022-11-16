import styled from "styled-components";

const NavbarStyled = styled.nav`
  padding: 4rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & .nav__logo {
    flex: 1 2 1rem;
  }

  & .nav__links {
    flex: 1.5 2;
    display: flex;
    list-style: none;
    & li {
      font-family: var(--font-ubuntu);
      cursor: pointer;
      font-size: 1.8rem;
      color: var(--grayish-blue);
      padding: 1rem 2rem;
      & .nav__link-title {
        margin-right: 0.5rem;
      }
      & .nav__link-icon {
        margin-top: auto;
        transition: transform 0.2s;
      }
      &:hover .nav__link-icon {
        transform: rotate(180deg);
      }
      &:hover .nav__link-title {
        text-decoration: underline;
      }
      &:hover .nav__sublinks {
        display: block;
      }
    }
    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  & .nav__sublinks {
    display: none;
    background-color: var(--white);
    padding: 2rem 1rem;

    padding-right: 0.5rem;
    list-style: none;
    position: absolute;
    border-radius: 4px;

    & li {
      margin: 1rem 0;
      padding: 1rem;
      & a {
        text-decoration: none;
        color: var(--very-dark-black-blue);
        font-family: var(--font-ubuntu);
        transition: all 0.2s;
        &:hover {
          font-weight: 600;
        }
      }
    }
  }
  & .nav__btns {
    flex: 2 0;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  & .menu__icon {
    display: none;
    @media screen and (max-width: 700px) {
      display: block;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 6rem 3rem;
  }
`;

export default NavbarStyled;
