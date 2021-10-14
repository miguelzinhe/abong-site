import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <GlossaryList>
      <Slider {...settings}>
        {GlossaryItems.map((item) => {
          return (
            <div className="glossary-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </Slider>
    </GlossaryList>
  );
};

const GlossaryList = styled.section`
  color: #00b4c9;

  .glossary-item {
    font: normal normal normal 16px/24px Rubik;
    padding: 0 2rem;
    border-right: 0.5rem solid #00b4c9;
  }

  .glossary-item h3 {
    text-transform: uppercase;
    font: normal normal normal 16px/24px Rubik;
    font-weight: 700;
  }

  .slick-dots {
    bottom: -60px;
  }
`;

export default GlossaryCarousel;
