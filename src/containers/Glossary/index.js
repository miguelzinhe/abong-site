import React from "react";
import styled from "styled-components";

const Glossary = () => {
  return (
    <GlossarySection>
      <div className="glossary-wrapper">
        <h2 className="glossary-title">
          <span>
            O BE A <br /> BA DA <br /> AIDS
          </span>
        </h2>
        <div className="glossary-text">
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

  .glossary-title {
    font: normal normal normal 80px/80px Rubik;
    font-weight: 500;
    letter-spacing: 0px;
    text-align: left;
  }

  .glossary-wrapper {
    padding: 4rem 0 8rem 0;
  }

  .glossary-title span {
    display: inline-block;
    border-bottom: 0.8rem solid #00b4c9;
  }

  .glossary-text {
    position: relative;
    padding-right: 2rem;
  }

  .glossary-text h4 {
    font: normal normal bold 18px/24px Rubik;
    letter-spacing: 0px;
    text-transform: uppercase;
  }

  .glossary-text p {
    text-align: left;
    font: normal normal normal 18px/24px Rubik;
    letter-spacing: 0px;
  }

  .glossary-text p + h4 {
    margin-top: 1rem;
  } 
  
  .glossary-text:after {
    content: "";
    width: 0;
    height: 60%;
    position: absolute;
    border: 0.5rem solid #00b4c9;
    background-color: #00b4c9;
    top: 20px;
    right: 0;
  }

  @media (min-width: 1440px) {
    margin: 3rem 30rem;

    .glossary-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      grid-auto-rows: minmax(100px, auto);
    }

    .glossary-title {
      grid-column: 1 / 3;
      grid-row: 1;
    }

    .glossary-text {
      grid-column: 3 / 10;
      grid-row: 1;
    }
  }
`;

export default Glossary;
