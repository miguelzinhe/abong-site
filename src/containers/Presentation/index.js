import React from 'react';
import styled from "styled-components";
import PresentationFooterImg from "../../images/presentation-img.png";
import EncontroNacionalImg from "../../images/encontro-nacional.png";
import AtoImg from "../../images/ato.png";


const Presentation = () => {
  return (
    <PresentationSection>
      <PresentationText>
        <div className="container">
          <p>
            A Sociedade Civil Organizada Brasileira já atuou fortemente para o
            enfrentamento à epidemia de HIV/Aids no país, mas ainda é uma doença
            cercada de preconceitos, o que dificulta a adesão ao tratamento.
          </p>
        </div>

        <div className="container-fluid">
        
          <img
            className="encontro-img"
            src={EncontroNacionalImg}
            alt="4º Encontro Nacional"
          />

          <p>
            Em tempos tão sombrios em que o conservadorismo age reforçando
            estigmas diversos e fragilizando conquistas, entendemos que o nosso
            deve é debater temas tão delicados como este, com informação séria e
            de acesso rápido.
          </p>
        </div>

        <div className="container">
          <img className="ato-img" src={AtoImg} alt="Ato" />

          <p>
            A Cartilha{" "}
            <b>“O enfrentamento à epidemia da aids e a defesa da democracia”</b>{" "}
            e este site compõem um chamado a todo conjunto de associadas da
            ABONG a defender a politica de AIDS, saúde integral e defesa do SUS.
          </p>

          <p>
            Acreditamos ser esse um importante passo para a retomada da
            Democracia plena e o combate a criminalização dos movimentos
            sociais.
          </p>
        </div>
      </PresentationText>
      <PresentationFooter>
        <img src={PresentationFooterImg} alt="Logo" />
      </PresentationFooter>
    </PresentationSection>
  );
}

const PresentationSection = styled.section`
`;

const PresentationFooter = styled.section`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }

  :before {
    display: block;
    position: absolute;
    content: "";
    background-image: url("./img/presentation-bg.svg");
    background-size: cover;
    height: 40px;
    width: 100%;
    top: -30px;
  }
`;

const PresentationText = styled.section`
  font: normal normal normal 28px/32px Rubik;
  color: #ff2d23;
  margin: auto 2rem;
  padding: 6rem 0;

  p + p {
    margin-top: 2rem;
  }

  .ato-img {
    width: 100%;
    margin: 2rem 0;
  }

  .encontro-img {
    width: 100%;
    margin: 2rem 0;
  }

  @media (min-width: 1440px) {
    padding: 10rem 0;

    .container {
      margin: 0 30rem;
    }

    .container-fluid {
      margin: 0 20rem;
      text-align: right;
    }

    .container-fluid p {
      width: 40%;
      text-align: left;
    }

    .ato-img {
      margin: 5.3rem 0;
    }

    .encontro-img {
      margin: 4.1rem 0;
    }
  }
`;

export default Presentation;
