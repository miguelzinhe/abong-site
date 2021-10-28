import React from "react";
import styled from "styled-components";
import PresentationFooterImg from "../../images/presentation-img.png";

const Presentation = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `cartilha.pdf`;
    link.href = "./assets/cartilha.pdf";
    link.click();
  };

  return (
    <PresentationSection>
      <PresentationFooter>
        <img src={PresentationFooterImg} alt="Logo" />
      </PresentationFooter>
      <PresentationText>
        <div className="presentationWrapper">
          <p>
            A Sociedade Civil Organizada Brasileira já atuou fortemente para o
            enfrentamento à epidemia de HIV/Aids no país, mas ainda é uma doença
            cercada de preconceitos, o que dificulta a adesão ao tratamento.
          </p>
          <p>
            Em tempos tão sombrios em que o conservadorismo age reforçando
            estigmas diversos e fragilizando conquistas, entendemos que o nosso
            deve é debater temas tão delicados como este, com informação séria e
            de acesso rápido.
          </p>
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
          <div className="downloadWrapper">
            <button className="download" onClick={onDownload}>
              Baixe agora a Cartilha
            </button>
          </div>
        </div>
      </PresentationText>
    </PresentationSection>
  );
};

const PresentationSection = styled.section``;

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
  padding: 3rem 0;
  @media (min-width: 720px) {
    padding: 6rem 0;
  }
  display: flex;
  justify-content: center;

  .presentationWrapper{
    @media (min-width: 720px) {
      width: 70vw;
    }
  }

  .downloadWrapper {
    display: flex;
    justify-content: center;
    margin: 3rem 0;

    .download {
      background-color: transparent;
      padding: 10px 30px;
      border: 0.3rem solid #ff2d23;
      color: #ff2d23;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
    }
  }

  p + p {
    margin-top: 2rem;
  }

  @media (max-width: 1440px) {
    .ato-img {
      width: 100%;
      margin: 2rem 0;
    }

    .encontro-img {
      width: 100%;
      margin: 2rem 0;
    }
  }

  @media (min-width: 1440px) {
    .container {
      margin: 0 15rem;
    }
  }
`;

export default Presentation;
