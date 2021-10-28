import React from "react";
import styled from "styled-components";
import PesteGayImg from "../../images/peste-gay.png";
import Hemoglobine from "../../images/hemoglobine.png";

const Timeline = () => {
  return (
    <TimelineSection>
      <FirstFase className="timeline">
        <FirstFaseText>
          <div className="wrapper">
            <h2>
              {" "}
              Linha <br /> do Tempo
            </h2>
            <h3>
              1980 <br /> —2019
            </h3>
          </div>

          <h3>Primeira Fase</h3>
          <div className="years">
            <h4>
              <span>1980</span>
            </h4>
            <p>1ª caso de aids no Brasil e o primeiro óbito</p>
          </div>
          <div className="years">
            <h4>
              <span>1983</span>
            </h4>
            <div className="yearsContainer">
              <p>
                Publicada em 12 de julho no Jornal do Brasil a 1ª notícia de caso
                de aids no país: “Brasil registra dois casos de câncer gay”.
              </p>
              <img src={PesteGayImg} alt="Peste Gay Manchete Jornal" />
            </div>
          </div>

          <div className="years">
            <h4>
              <span>1985</span>
            </h4>
            <div className="yearsContainer">
              <p>
                1º caso de transmissão vertical (mãe-bebê) de aids no Brasil.{" "}
                <br />
                —
                <br />
                Surge a primeira ONG de luta contra a aids: GAPA-SP, Grupo de
                Apoio e Prevenção à Aids.
              </p>
            </div>
          </div>
        </FirstFaseText>
      </FirstFase>
      <SecondFase>
        <SecondFaseText>
          <h3>Segunda Fase</h3>
          <div className="years">
            <h4>
              <span>1991</span>
            </h4>
            <div className="yearsContainer">

              <p>
                Realização do I Encontro Nacional de Pessoas Vivendo com Aids
                <br />
                —
                <br />O “Lacinho Vermelho” torna-se o símbolo mundial de luta
                contra a aids.
              </p>
            </div>
          </div>
          <div className="years">
            <h4>
              <span>1995</span>
            </h4>
            <div className="yearsContainer">

              <p>
                Nascimento do Plano Nacional de Cooperação Técnica Horizontal
                entre países da América Latina.
              </p>
            </div>
          </div>
        </SecondFaseText>
      </SecondFase>
      <ThirdFase>
        <ThirdFaseText>
          <h3>Terceira Fase</h3>
          <div className="years">
            <h4>
              <span>2002</span>
            </h4>
            <div className="yearsContainer">

              <p>
                Norma Técnica nº 01/2002, do Ministério da Saúde, garante parceria
                com ONG na Política de Incentivo HIV/Aids e outras DSTs.
              </p>
            </div>
          </div>
          <div className="years">
            <h4>
              <span>2013</span>
            </h4>
            <div className="yearsContainer">
              <p>
                Regulamentação dos serviços de atendimento e atenção às DSTs, HIV
                e Aids.
              </p>
            </div>
          </div>
        </ThirdFaseText>
      </ThirdFase>
      <TimelineFooter>
        <img src={Hemoglobine} alt="Logo" />
      </TimelineFooter>
    </TimelineSection>
  );
};

const TimelineSection = styled.section`
  position: relative;

  h3 {
    border-top: 0.8rem solid #000;
    font: normal normal bold 20px/24px Rubik;
    text-transform: uppercase;
    padding-top: 0.3rem;
    margin-bottom: 5rem;
  }

  .years {
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .years h4 {
    display: inline-block;
    font: normal normal normal 80px/99px Rubik;
    font-weight: 800;
  }

  .years span {
    border-bottom: 0.8rem solid #000;
  }

  .years p {
    font: normal normal normal 22px/28px Rubik;
    margin-top: 2rem;
  }

  .yearsContainer {
    max-width: 426px;
  }
  
  .yearsContainer img {
    width: 100%;
  }

  @media (max-width: 768px) {
    .timeline-img img {
      width: 100%;
    }
  }

  @media (min-width: 762px) {

    .years h4 {
      margin-bottom: 20px;
    }

    .years p,
    .years img {
      margin-top: 0;
    }

    .years img {
      margin-top: 25px;
      mix-blend-mode: multiply;
    }

    .timeline-img {
      text-align: right;
      margin-bottom: 5rem;
    }
  }

  @media (min-width: 1440px) {
    .timeline-img img {
      margin-right: -8.5rem;
    }
  }
`;

const FirstFase = styled.div`
  background-color: #fddcb5;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 6rem 0;

  :before {
    display: block;
    position: absolute;
    content: "";
    background-image: url("./img/Group-45.svg");
    background-size: cover;
    height: 50px;
    width: 100%;
    top: -50px;
  }

  :after {
    display: block;
    position: absolute;
    content: "";
    background: url("./img/Group-45.svg") bottom no-repeat;
    background-size: cover;
    height: 50px;
    width: 100%;
    bottom: -20px;
  }
`;

const FirstFaseText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70vw;

  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .wrapper h2 {
    font: normal normal normal 60px/60px Rubik;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .wrapper h3 {
    font: normal normal normal 23px/25px Rubik;
    font-weight: 800;
    text-align: right;
    border: none;
  }

  @media (min-width: 768px) {

  .wrapper h2 {
    font: normal normal normal 130px/120px Rubik;
    font-weight: 500;
  }

  .wrapper h3 {
    font: normal normal normal 40px/42px Rubik;
    font-weight: 800;
  }
  
  }

  @media (min-width: 1440px) {
    margin: auto 15rem;
  }
`;

const SecondFase = styled.div`
  background-color: #fabc73;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 6rem 0;
`;

const SecondFaseText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70vw;

  @media (min-width: 1440px) {
    margin: auto 15rem;
  }
`;

const ThirdFase = styled.div`
  background-color: #f7a84b;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 6rem 0;

  :before {
    display: block;
    position: absolute;
    content: "";
    background: url("./img/Group-49.svg") top no-repeat;
    background-size: cover;
    height: 30px;
    width: 100%;
    top: -20px;
    z-index: 0;
  }

  :after {
    display: block;
    position: absolute;
    content: "";
    background: url("./img/Group-98.svg") bottom no-repeat;
    background-size: cover;
    height: 70px;
    width: 100%;
    bottom: -20px;
    z-index: 0;
  }
`;

const ThirdFaseText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70vw;

  @media (min-width: 1440px) {
    margin: auto 15rem;
  }
`;

const TimelineFooter = styled.section`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 800px;
    object-fit: cover;
    object-position: left bottom;
  }
`;

export default Timeline;
