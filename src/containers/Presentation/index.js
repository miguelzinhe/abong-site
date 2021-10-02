import React from 'react';
import styled from "styled-components";

const Presentation = () => {
  return (
    <PresentationSection>
      <PresentationText>
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
          A Cartilha <b>“O enfrentamento à epidemia da aids e a defesa da democracia”</b> e
          este site compõem um chamado a todo conjunto de associadas da ABONG a
          defender a politica de AIDS, saúde integral e defesa do SUS.
        </p>

        <p>
          Acreditamos ser esse um importante passo para a retomada da Democracia
          plena e o combate a criminalização dos movimentos sociais.
        </p>
      </PresentationText>
    </PresentationSection>
  );
}

const PresentationSection = styled.section`
  display: inline-block;
`;

const PresentationText = styled.section` 
  font: normal normal normal 28px/32px Rubik;
  margin: auto 3rem;
  color: #ff2d23;
  padding: 3rem 0;

  p + p {
    margin-top: 2rem;
  }

  @media (min-width: 1440px) {
    margin: auto 30rem;
  }
`;

export default Presentation;
