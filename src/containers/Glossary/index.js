import React from "react";
import styled from "styled-components";

const Glossary = () => {
  return (
    <GlossarySection>
      <div className="glossary-text">
        <h2>
          O BE A BA DA AIDS
        </h2>
        <div>
          <h4>O que é HIV?</h4>
          <p>
            HIV é o nome do vírus que dá origem à AIDS e que é conhecido
            cientificamente como Vírus da Imunodeficiência Humana. Este vírus
            que pode entrar no corpo através do contato com sangue e/ou fluídos
            corporais de uma pessoa infectada e, a partir desse momento, a
            pessoa passa a ser considerada HIV positiva ou “soropositiva” e pode
            também contaminar outras pessoas
          </p>
          <h4>Qual a diferença entre HIV e aids?</h4>
          <p>
            Uma pessoa, após ter sido infectada pelo HIV, pode permanecer muitos
            anos sem desenvolver nenhum sintoma, ou seja, vive com o vírus. A
            aids é o estágio mais avançado da infecção pelo HIV, quando a
            pessoa, devido à debilitação do sistema imunológico, apresenta
            infecções oportunistas, como a tuberculose e a pneumonia, por
            exemplo.
          </p>
        </div>
      </div>
    </GlossarySection>
  );
};

const GlossarySection = styled.section`
  margin: 3rem 3rem;
  font: normal normal normal 28px/32px Rubik;
  color: #00b4c9;

  @media (min-width: 1440px) {
    margin: 3rem 30rem;
  }

  h2 {
    display: inline-block;
    border-bottom: 1.4rem solid #00b4c9;
    text-align: left;
    font: normal normal normal 80px/80px Rubik;
    letter-spacing: 0px;
    opacity: 1;
    font-weight: 500;
  }

  div > div {
    margin-left: 6rem;
  }

  h4 {
    font: normal normal bold 18px/24px Rubik;
    letter-spacing: 0px;
    text-transform: uppercase;
  }

  p {
    text-align: left;
    font: normal normal normal 18px/24px Rubik;
    letter-spacing: 0px;
  }

  .glossary-text {
    display: flex;
  }
`;

export default Glossary;
