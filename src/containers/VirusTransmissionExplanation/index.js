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
        <h2>
          {page.title} <br /> {page.title2}
        </h2>
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
  position: relative;

  :before {
    display: block;
    position: absolute;
    content: "";
    background-image: url("./img/Group-54.svg");
    background-size: cover;
    height: 40px;
    width: 100%;
    top: -30px;
  }
  
  :after {
    display: block;
    position: absolute;
    content: "";
    background-image: url("./img/Group-52.svg");
    background-size: cover;
    height: 40px;
    width: 100%;
    bottom: -30px;
  }
`;

const VirusTransmissionText = styled.div`
  margin: auto 3rem;
  font: normal normal normal 18px/24px Rubik;
  background-color: #00b4c9;
  color: #fff;
  padding: 3rem 0;

  h2 {
    position: relative;
    margin-bottom: 3rem;
    font: normal normal normal 40px/44px Rubik;
    font-weight: 500;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: #fff;
    opacity: 1;
  }

  h2:after {
    position: absolute;
    content: "";
    border: 0.5rem solid #fff;
    width: 42%;
    left: 0;
    bottom: -1.4rem;
  }

  @media (min-width: 1440px) {
    margin: auto 30rem;
  }
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
