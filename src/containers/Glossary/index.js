import React from 'react';
import styled from "styled-components";
import GlossaryCarousel from '../../components/GlossaryCarousel';

const Glossary = () => {
  const page = {
    title: "O Be A Ba da AIDS",
  };
  return (
    <PreventionExplanationSection className="Glossary">
      <GlossaryText className="GlossaryText">
        <h2>
          {page.title}
        </h2>
      </GlossaryText>
      <GlossaryCarousel />
    </PreventionExplanationSection>
  );
}

const PreventionExplanationSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const GlossaryText = styled.div`
  margin: 0 auto;
  color: #00b4c9;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 720px) {
    width: 60vw;
  }

  h2 {
    position: relative;
    font: normal normal Rubik;
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  h2:after {
    position: absolute;
    content: "";
    border: 0.5rem solid #00b4c9;
    width: 42%;
    left: 0;
    bottom: -1.4rem;
  }

  @media (min-width: 1440px) {
    margin-bottom: 3rem;
  }
`;

export default Glossary;
