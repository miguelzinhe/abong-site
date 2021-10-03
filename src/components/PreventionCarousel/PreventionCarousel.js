import React from "react";
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreventionCarousel = () => {
  const preventions = [
    {
      title: "Prevenção da transmissão vertical",
      description:
        "toda mulher grávida deve fazer o teste de HIV no pré-natal e no parto. Se o exame for positivo, a gestante deve receber tratamento adequado para evitar a transmissão do vírus para bebê durante a gestação, o parto ou a amamentação. Além disso, o recém-nascido também deverá tomar medicação nas seis primeiras semanas de vida e será necessário substituir a amamentação por leite artificial ou humano processado em bancos de leite.",
    },
    {
      title: "Profilaxia Pós-exposição (PEP)",
      description:
        "é o uso de medicamentos antirretrovirais em até 72 horas após uma situação de possível contato com o HIV. A PEP é oferecida gratuitamente em serviços de atendimento de emergência ou em Serviços de Atendimento Especializados (SAE).",
    },
    {
      title: "Redução de danos",
      description:
        "refere-se a um pacote abrangente de políticas, programas e abordagens que procuram reduzir as consequências prejudiciais, tanto à saúde quanto à situação social e econômica, associadas ao uso de substâncias psicoativas.",
    },
    {
      title: "Redução de danos",
      description:
        "refere-se a um pacote abrangente de políticas, programas e abordagens que procuram reduzir as consequências prejudiciais, tanto à saúde quanto à situação social e econômica, associadas ao uso de substâncias psicoativas.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <PreventionList>
      <Slider {...settings}>
      {preventions.map((prevention) => {
       return(
        <div className="prevention-item">
          <h3>{prevention.title}</h3>
          <p>{prevention.description}</p>
        </div>
       )
      })}
      </Slider>
    </PreventionList>
  );
};

const PreventionList = styled.section`
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

export default PreventionCarousel;