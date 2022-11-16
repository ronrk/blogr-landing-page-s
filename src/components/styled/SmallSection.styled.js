import styled from "styled-components";
import imgCircle from "../../assets/images/bg-pattern-circles.svg";

const SmallSection = styled.section`
  position: relative;
  height: 25vw;
  /* overflow: hidden; */
  background-image: url(${imgCircle}),
    linear-gradient(to right, var(--gradient-body));
  background-size: contain;
  background-repeat: no-repeat;

  border-top-right-radius: 15rem;
  border-bottom-left-radius: 15rem;

  & .img__circle {
    position: absolute;
    z-index: 0;
    left: -17%;
    top: -95%;
    width: 90%;
  }

  & .img__illus {
    display: block;
    height: 40vw;
    /* margin-top: -6rem; */
    position: relative;
  }

  & .container {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    /* padding: 0 4rem; */
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    & .content {
      color: var(--white);
      width: 60%;
      margin: 2rem 5rem;

      & .title {
        font-size: 3rem;
        font-family: var(--font-overpass);
        font-weight: 300;
        letter-spacing: 0.7px;
        margin-bottom: 2rem;
        @media screen and (max-width: 900px) {
          font-size: 2.5rem;
        }
        @media screen and (max-width: 700px) {
          font-size: 3.5rem;
        }
      }
      & .text {
        font-family: var(--font-ubuntu);
        font-size: 1.6rem;
        line-height: 1.6;
        word-spacing: 2px;
        letter-spacing: 1.3px;
        color: var(--grayish-blue);

        @media screen and (max-width: 1000px) {
          font-size: 1.2rem;
        }
        @media screen and (max-width: 700px) {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    height: 30vw;
  }
  @media screen and (max-width: 700px) {
    height: 80vw;
    width: 100vw;
    border-top-right-radius: 8rem;
    border-bottom-left-radius: 8rem;
    .container {
      flex-direction: column;
      width: 100%;
      text-align: center;
    }
  }
  & .img__illus {
    margin-top: -10rem;
  }
`;

export default SmallSection;
