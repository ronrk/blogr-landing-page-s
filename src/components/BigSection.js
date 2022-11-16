import React from "react";
import Wrapper from "./styled/BigSection.styled";

const BigSection = ({ title, data, img }) => {
  const dataTextElement = data.map((item, i) => (
    <div key={i} className="section__item">
      <h4 className="content__title">{item.title}</h4>
      <p className="content__text">{item.text}</p>
    </div>
  ));
  return (
    <Wrapper className="bigSection">
      {title ? <h2 className="title">{title}</h2> : null}
      <div className="container">
        <div className="section__content">{dataTextElement}</div>

        <img className="section__img" src={img} alt="" />
      </div>
    </Wrapper>
  );
};

export default BigSection;
