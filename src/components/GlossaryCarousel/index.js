import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlossaryCarousel = () => {
  const items = [
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
    {
      title: "Como a infecção pelo HIV e a aids são reconhecidas?",
      description:
        "Clinicamente, a infecção pelo HIV é dividida em três fases: aguda, assintomática (ou de latência clínica) e aids.",
        topic1: "Fase aguda (3 a 4 semanas): corresponde às primeiras semanas de infecção. A pessoa pode ter febre, dor de garganta, dor de cabeça, dor ocular, entre outros sinais, ou simplesmente não apresentar sintoma nenhum.",
        topic2: "Fase assintomática ou de latência clínica (8 a 10 anos): o vírus está se replicando no organismo, por vezes não há o desenvolvimento de manifestações clínicas, mas há risco de propagação da infecção, mesmo quando a pessoa não sabe que vive com HIV.",
        topic3: "Síndrome da imunodeficiência adquirida (aids): nessa fase, a pessoa fica doente devido ao comprometimento do sistema imunológico e fica mais propensa a desenvolver infecções oportunistas. Os sintomas geralmente incluem perda de peso, cansaço extremo, sudorese noturna, falta de apetite, diarreia, ressecamento da pele, queda de cabelo, entre outros.",
      },
  ];


  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function resizeListener(){
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", resizeListener)
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width > 1200 ? 2 : 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <GlossaryList>
      <Slider {...settings}>
      {items.map((item) => {
       return(
        <div className="prevention-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {(item.topic1 || item.topic2 || item.topic3) &&
          <ul>
            <li>{item.topic1}</li>
            <li>{item.topic2}</li>
            <li>{item.topic3}</li>
          </ul>
          }
        </div>
       )
      })}
      </Slider>
    </GlossaryList>
  );
};

const GlossaryList = styled.section`
  color: #00b4c9;

  .prevention-item {
    font: normal normal normal 16px/24px Rubik;
    padding: 0 2rem;
    border-right: 0.5rem solid #00b4c9;
  }

  .prevention-item h3 {
    text-transform: uppercase;
    font: normal normal normal 16px/24px Rubik;
    font-weight: 700;
  }

  .slick-dots {
   bottom: -60px;
  }
`;

export default GlossaryCarousel;
