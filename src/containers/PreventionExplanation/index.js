import React from 'react';
import styled from "styled-components";
import PreventionCarousel from '../../components/PreventionCarousel/PreventionCarousel';

const PreventionExplanation = () => {
  const page = {
    title: "Estratégias de",
    title2: "prevenção combinadas",
    description: "Vários métodos de prevenção podem ser combinados de acordo com a vida da pessoa que escolhe a melhor estratégia para prevenir a infecção, associando diferentes ferramentas ou métodos (ao mesmo tempo ou em sequência), conforme a situação, o risco e as escolhas pessoais. Existem diversas estratégias além do uso do preservativo, que como falamos continua sendo o mais eficaz."
  };
  return (
    <PreventionExplanationSection className="PreventionExplanation">
      <PreventionText className="PreventionText">
        <h2>
          {page.title} <br /> {page.title2}
        </h2>
        <Text>{page.description}</Text>
      </PreventionText>
      <PreventionCarousel />
    </PreventionExplanationSection>
  );
}

const PreventionExplanationSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
`;

const PreventionText = styled.div`
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
    font: normal normal normal 40px/44px Rubik;
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
    margin: auto 15rem;
    margin-bottom: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
`;

export default PreventionExplanation;
