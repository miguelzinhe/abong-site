import React from "react";
import styled from "styled-components";

const Timeline = () => {
  return (
    <TimelineSection>
      <FirstFase className="timeline">
        <FirstFaseText>
          <h2>
            Linha <br /> do Tempo
          </h2>
          <h3>Primeira Fase</h3>
          <div className="years">
            <h4>1980</h4>
            <p>1ª caso de aids no Brasil e o primeiro óbito</p>
          </div>
          <div className="years">
            <h4>1983</h4>
            <p>
              Publicada em 12 de julho no Jornal do Brasil a 1ª notícia de caso
              de aids no país: “Brasil registra dois casos de câncer gay”.
            </p>
          </div>
          <div className="years">
            <h4>1985</h4>
            <p>
              1º caso de transmissão vertical (mãe-bebê) de aids no Brasil. —
              Surge a primeira ONG de luta contra a aids: GAPA-SP, Grupo de
              Apoio e Prevenção à Aids.
            </p>
          </div>
        </FirstFaseText>
      </FirstFase>
      <SecondFase>
        <SecondFaseText>
          <h3>Segunda Fase</h3>
          <div className="years">
            <h4>1991</h4>
            <p>
              Realização do I Encontro Nacional de Pessoas Vivendo com Aids — O
              “Lacinho Vermelho” torna-se o símbolo mundial de luta contra a
              aids.
            </p>
          </div>
          <div className="years">
            <h4>1995</h4>
            <p>
              Nascimento do Plano Nacional de Cooperação Técnica Horizontal
              entre países da América Latina.
            </p>
          </div>
        </SecondFaseText>
      </SecondFase>
      <ThirdFase>
        <ThirdFaseText>
          <h3>Terceira Fase</h3>
          <div className="years">
            <h4>2002</h4>
            <p>
              Norma Técnica nº 01/2002, do Ministério da Saúde, garante parceria
              com ONG na Política de Incentivo HIV/Aids e outras DSTs.
            </p>
          </div>
          <div className="years">
            <h4>2013</h4>
            <p>
              Regulamentação dos serviços de atendimento e atenção às DSTs, HIV
              e Aids.
            </p>
          </div>
        </ThirdFaseText>
      </ThirdFase>
    </TimelineSection>
  );
};

const TimelineSection = styled.div`
  position: relative;

  h3 {
    border-top: 6px solid #000;
    font: normal normal bold 20px/24px Rubik;
    text-transform: uppercase;
    padding-top: 0.3rem;
    margin-bottom: 5rem;
  }

  h4 {
    display: inline-block;
    font: normal normal normal 80px/99px Rubik;
    font-weight: 800;
    border-bottom: 6px solid #000;
  }

  .years {
    display: flex;
    margin-bottom: 3rem;
  }

  p {
    font: normal normal normal 22px/28px Rubik;
    padding-left: 4rem;
  }
`;

const FirstFase = styled.div`
  background-color: #fddcb5;
`;

const FirstFaseText = styled.div`
  margin: auto 3rem;
  padding-top: 4rem;
  padding-bottom: 2rem;

  h2 {
    font: normal normal normal 120px/110px Rubik;
    font-weight: 500;
    text-transform: uppercase;
  }

  @media (min-width: 1440px) {
    margin: auto 30rem;
  }
`;

const SecondFase = styled.div`
  background-color: #fabc73;
`;

const SecondFaseText = styled.div`
  margin: auto 3rem;
  padding-top: 4rem;
  padding-bottom: 2rem;

  @media (min-width: 1440px) {
    margin: auto 30rem;
  }
`;

const ThirdFase = styled.div`
  background-color: #f7a84b;
`;

const ThirdFaseText = styled.div`
  margin: auto 3rem;
  padding-top: 4rem;
  padding-bottom: 2rem;

  @media (min-width: 1440px) {
    margin: auto 30rem;
  }
`;

export default Timeline;
