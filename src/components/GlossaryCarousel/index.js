import React from "react";
import styled from "styled-components";

const GlossaryCarousel = () => {
  const GlossaryItems = [
    {
      title: "O que é HIV?",
      description:
        "HIV é o nome do vírus que dá origem à AIDS e que é conhecido cientificamente como Vírus da Imunodeficiência Humana. Este vírus que pode entrar no corpo através do contato com sangue e/ou fluídos corporais de uma pessoa infectada e, a partir desse momento, a pessoa passa a ser considerada HIV positiva ou “soropositiva” e pode também contaminar outras pessoas.",
    },
    {
      title: "Qual a diferença entre HIV e Aids?",
      description:
        "Uma pessoa, após ter sido infectada pelo HIV, pode permanecer muitos anos sem desenvolver nenhum sintoma, ou seja, vive com o vírus. A aids é o estágio mais avançado da infecção pelo HIV, quando a pessoa, devido à debilitação do sistema imunológico, apresenta infecções oportunistas, como a tuberculose e a pneumonia, por exemplo.",
    },
  ];

  return (
    <GlossaryList>
      {GlossaryItems.map((item) => {
        return (
          <div className="glossary-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </GlossaryList>
  );
};

const GlossaryList = styled.div`
  color: #00b4c9;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-right: 0.5rem solid #00b4c9;
  @media (min-width: 720px) {
    max-height: 600px;
  }

  .glossary-item {
    font: normal Rubik;
    padding: 0 1rem;
    margin-bottom: 20px;
    width: 100%;
    font-size: 1.125rem;
  }

  .glossary-item h3 {
    text-transform: uppercase;
    font: normal Rubik;
    font-weight: 700;
    font-size: 1.125rem;
  }

  .slick-dots {
    bottom: -60px;
  }
`;

export default GlossaryCarousel;
