import React from "react";
import styled from "styled-components";
import NotTransmissionList from "../../components/NotTransmissionList";
import TransmissionList from "../../components/TransmissionList";

const VirusTransmissionExplanation = () => {
  const page = {
    title: "Como ocorre ",
    title2: "a transmissão do vírus?",
  };

  return (
    <VirusTransmissionSection className="VirusTransmissionExplanation">
      <VirusTransmissionText>
        <Title>
          {page.title} <br /> {page.title2}
        </Title>
        <Lists>
          <TransmissionList />
          <NotTransmissionList />
        </Lists>
      </VirusTransmissionText>
    </VirusTransmissionSection>
  );
};

const VirusTransmissionSection = styled.section`
  background-color: #00b4c9;
  color: #fff;
`;

const VirusTransmissionText = styled.div`
  margin: auto 3rem;
  font: normal normal normal 18px/24px Rubik;
  background-color: #00b4c9;
  color: #fff;
  padding: 3rem 0;

  @media (min-width: 1440px) {
    margin: auto 30rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 3rem;
  font: normal normal normal 40px/44px Rubik;
  font-weight: 500;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: #fff;
  opacity: 1;
`;

const Lists = styled.div`
  div + div {
    margin-top: 2rem;
  }

  h4 {
    font: normal normal bold 18px/24px Rubik;
    text-transform: uppercase;
  }

  ul {
    padding-left: 20px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    position: relative;
  }
`;

export default VirusTransmissionExplanation;
