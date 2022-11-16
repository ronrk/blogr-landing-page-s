import styled from "styled-components";
import bgBig from "../../assets/images/bg-pattern-intro-desktop.svg";

const HeaderStyled = styled.header`
  height: 70vh;
  /* background-color: var(--light-red); */
  background-image: url(${bgBig}),
    linear-gradient(to right, var(--gradient-intro));
  background-size: cover;
  background-position: xcenter;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  border-bottom-left-radius: 10rem;

  & .header__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  & .header__title {
    font-size: 5rem;
    letter-spacing: 1px;
    font-family: var(--font-overpass);
    color: var(--white);
    font-weight: 300;
    margin-bottom: 1rem;
  }
  & .header__text {
    font-size: 1.9rem;
    letter-spacing: 1px;
    word-spacing: 2px;
    font-family: var(--font-overpass);
    color: var(--grayish-blue);
    font-weight: 300;
    display: block;
    margin-bottom: 6rem;
  }
  @media screen and (max-width: 700px) {
    height: 110vh;

    & .header__title {
      font-size: 6rem;

      width: 80%;
      text-align: center;
    }
    & .header__text {
      font-size: 3rem;
      width: 80%;
      text-align: center;
    }
  }
`;

export default HeaderStyled;
