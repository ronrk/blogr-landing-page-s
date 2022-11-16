import React from "react";
import img from "../assets/images/illustration-phones.svg";
import imgCircle from "../assets/images/bg-pattern-circles.svg";
import Wrapper from "./styled/SmallSection.styled";

const SmallSection = () => {
  return (
    <Wrapper>
      {/* <img className="img__circle" src={imgCircle} alt="circle background" /> */}
      <div className="container">
        <img className="img__illus" src={img} alt="illustration phones" />

        <div className="content">
          <h3 className="title">State of the Art Infrastructure</h3>
          <p className="text">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSection;
