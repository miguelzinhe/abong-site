import React from "react";
import styled from "styled-components";
import GlossaryCarousel from "../../components/GlossaryCarousel";


const Glossary = () => {
  return (
    <GlossarySection>
      <h2 className="glossary-title">
        <span> O BE A BA DA AIDS </span>
      </h2>
      <GlossaryCarousel />
    </GlossarySection>
  );
};

const GlossarySection = styled.section`
  margin: 3rem 3rem;
  font: normal normal normal 28px/32px Rubik;
  color: #00b4c9;

  .glossary-title {
    position: relative;
    font: normal 75px/75px Rubik;
    font-weight: 500;
    letter-spacing: 0px;
    text-align: left;
    padding-bottom: 1rem;
    margin-bottom: 4rem;
  }

  .glossary-title:after {
    position: absolute;
    content: "";
    border: 0.5rem solid #00b4c9;
    width: 42%;
    left: 0;
    bottom: -1.4rem;
  }

  @media (min-width: 1440px) {
    margin: 3rem 30rem;

  }
`;

export default Glossary;
