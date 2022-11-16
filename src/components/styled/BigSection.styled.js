import styled from "styled-components";

const BigSectionStyled = styled.section`
  margin-top: 10rem;
  margin-bottom: 8rem;
  & .title {
    font-size: 4.5rem;
    font-family: var(--font-overpass);
    font-weight: 300;
    text-align: center;
    margin-bottom: 10rem;
  }

  & .container {
    margin-top: -10rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .section__img {
      width: 60%;

      transform: translateX(30%);
    }
    & .section__content {
      /* flex: 1 0; */
      & .section__item {
        padding: 3rem 0;
        width: 90%;
        margin-left: auto;
      }

      & .content__text {
        font-size: 1.8rem;
        font-family: var(--font-overpass);
        color: var(--very-dark-grayish-blue);
        line-height: 1.6;
      }

      & .content__title {
        font-size: 3.5rem;
        font-family: var(--font-overpass);
        font-weight: 300;
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    margin-top: 5rem;
    & .container {
      margin: 0 auto;
      text-align: center;
      flex-direction: column;
      justify-content: center;

      width: 90%;
      & .section__img {
        width: 100%;
        order: 0;
        padding: 0;
        margin: 0;
        transform: translate(0);
      }
      & .section__content {
        order: 1;
        width: 100%;
        padding: 0;

        margin: 0 auto;
        & .section__item {
          margin: 0;
          width: 100%;
        }
      }
    }
    & .title {
      margin-bottom: 3rem;
    }
  }
`;

export default BigSectionStyled;
