import React from "react";
import styled from "styled-components";
import GlossaryCarousel from "../../components/GlossaryCarousel";


const Glossary = () => {
  return (
    <GlossarySection>
      <div className="glossaryWrapper">
      <h2 className="glossary-title">
        <span> O BE A <br/> BA DA AIDS </span>
      </h2>
      <GlossaryCarousel />
      </div>
    </GlossarySection>
  );
};

const GlossarySection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 20px;
  font: normal normal normal 28px/32px Rubik;
  color: #00b4c9;
  padding: 3rem 0;
  align-items: center;

  .glossaryWrapper {
    @media (min-width: 720px) {
      width: 70vw;
    }
  
    display: flex;
    @media (max-width: 982px) {
      flex-wrap: wrap;
    }
  }

  .glossary-title {
    position: relative;
    font: normal 5rem/5rem Rubik;
    font-weight: 500;
    letter-spacing: 0px;
    text-align: left;
    padding-bottom: 1rem;
    margin-bottom: 4rem;
    width: 100%;
    padding: 0 1rem;
  }

  @media (min-width: 1000px) {
    .glossary-title span:after {
      position: absolute;
      content: "";
      border: 0.5rem solid #00b4c9;
      width: 60%;
      left: 0;
      top: 16rem;
      margin: 0 1rem;
    }
  }
`;

export default Glossary;
