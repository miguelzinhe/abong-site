import React from 'react';
import styled from "styled-components";

const PreventionExplanation = () => {
  const page = {
    title: "Estratégias de",
    title2: "prevenção combinadas",
    description: "Vários métodos de prevenção podem ser combinados de acordo com a vida da pessoa que escolhe a melhor estratégia para prevenir a infecção, associando diferentes ferramentas ou métodos (ao mesmo tempo ou em sequência), conforme a situação, o risco e as escolhas pessoais. Existem diversas estratégias além do uso do preservativo, que como falamos continua sendo o mais eficaz."
  };
  return (
    <PreventionExplanationSection className="PreventionExplanation">
        <Title>
          {page.title} <br /> {page.title2}
        </Title>
        <Text>{page.description}</Text>
    </PreventionExplanationSection>
  );
}

const PreventionExplanationSection = styled.section`
  margin: auto 3rem;
  color: #00b4c9;
  padding: 3rem 0;

  @media (min-width: 1440px) {
    margin: auto 30rem;
  }
`;

const Title = styled.h2`
  font: normal normal normal 40px/44px Rubik;
  font-weight: 500;
  margin-bottom: 3rem;
`;

const Text = styled.p`
  font: normal normal normal 22px/28px Rubik;
`;

export default PreventionExplanation;
