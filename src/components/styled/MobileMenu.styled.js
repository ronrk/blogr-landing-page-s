import styled from "styled-components";

const MobileMenuStyled = styled.div`
  &.show {
    display: flex;
  }
  @media screen and (min-width: 700px) {
    &.show {
      display: none;
    }
  }
  background-color: var(--white);
  position: absolute;
  top: 12rem;
  width: 90%;
  height: 75vh;
  padding: 5rem;
  left: 5%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 0 6px var(--very-dark-black-blue);
  display: none;

  & .menu__links {
    /* flex: 1.5 2; */
    /* display: flex; */
    position: relative;
    list-style: none;
    width: 100%;
    text-align: center;
    & li {
      font-family: var(--font-ubuntu);
      cursor: pointer;
      font-size: 1.8rem;
      color: var(--grayish-blue);
      padding: 1rem 2rem;
      width: 100%;
      display: block;

      & .menu__link-title {
        margin-right: 0.5rem;
        color: var(--very-dark-black-blue);
      }
      & .menu__link-icon {
        margin-top: auto;
        transition: transform 0.2s;
      }
      &:hover .menu__link-icon {
        transform: rotate(180deg);
      }
      &:hover .menu__link-title {
        text-decoration: underline;
      }
      &:hover .menu__sublinks {
        display: block;
        visibility: visible;
        height: auto;
      }
    }
    @media screen and (max-width: 700px) {
      /* display: none; */
    }
  }

  & .menu__sublinks {
    display: none;
    visibility: hidden;
    background-color: var(--white);
    padding: 2rem 1rem;
    height: 0;
    width: 50%;
    margin: 0 auto;
    padding-right: 0.5rem;
    list-style: none;
    /* position: absolute; */
    border-radius: 6px;
    transition: all 0.2s;
    background-color: var(--grayish-blue);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);

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
  & .menu__btns {
    /* flex: 2 0; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    margin-top: 2rem;
    &::before {
      position: absolute;
      content: "";
      width: 10000%;
      left: -1000%;
      height: 2px;
      background-color: var(--grayish-blue);
      top: 0;
    }
  }

  & .menu__icon {
    display: none;
    @media screen and (max-width: 700px) {
      display: block;
    }
  }
`;

export default MobileMenuStyled;
