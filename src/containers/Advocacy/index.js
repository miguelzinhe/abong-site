import React from 'react';
import { useState, useEffect } from "react";
import SitesList from '../../components/SitesList/SitesList';
import styled from 'styled-components';
import AdvocacyImage from "../../images/advocacy-img.png";

const Advocacy = () => {
  const [sites, setSites] = useState([]);

  const getSite = () => {
    fetch("sitesList.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setSites(myJson)
      });
  };
  useEffect(() => {
    getSite();
  }, []);

  return (
    <AdvocacySection>
      <AdvocacyHeader>
        <img src={AdvocacyImage} alt="Logo" />;
      </AdvocacyHeader>
      <AdvocacyText>
        <h2>
          O Advocacy <br /> na política de Aids
        </h2>
        <p>
          Vários métodos de prevenção podem ser combinados de acordo com a vida
          da pessoa que escolhe a melhor estratégia para prevenir a infecção,
          associando diferentes ferramentas ou métodos (ao mesmo tempo ou em
          sequência), conforme a situação, o risco e as escolhas pessoais.
          Existem diversas estratégias além do uso do preservativo, que como
          falamos continua sendo o mais eficaz.
        </p>
        <ul>
          {sites.map((site) => {
            return <SitesList key={site.id} site={site} />;
          })}
        </ul>
      </AdvocacyText>
    </AdvocacySection>
  );
};

const AdvocacySection = styled.section`
  margin-top: 4rem;
  padding-bottom: 5rem;
`;

const AdvocacyHeader = styled.section`
  position: relative;
  background-color: #f39626;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 0;

  :before {
    display: block;
    position: absolute;
    content: "";
    background: url("./img/advocacy/advocacy-bg.svg") top no-repeat;
    background-size: cover;
    height: 20px;
    width: 100%;
    top: -3px;
    z-index: 0;
  }

  :after {
    display: block;
    position: absolute;
    content: "";
    background: url("./img/advocacy/advocacy-bg.svg") bottom no-repeat;
    background-size: cover;
    height: 70px;
    width: 100%;
    bottom: -20px;
    z-index: 0;
  }

  img {
    z-index: 1000;
  }
`;

const AdvocacyText = styled.div`
  margin: auto 3rem;
  padding-top: 6rem;
  padding-bottom: 2rem;
  font: normal normal normal 28px/32px Rubik;
  color: #f39626;

  h2 {
    position: relative;
    font: normal normal normal 40px/44px Rubik;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  h2:after {
    position: absolute;
    content: "";
    border: 0.5rem solid #f39626;
    width: 42%;
    left: 0;
    bottom: -1.4rem;
  }

  p {
    margin-top: 3rem;
  }

  ul {
    margin-top: 2rem;
    list-style: none;
  }

  li {
    font: normal normal normal 16px/22px Rubik;
  }

  a {
    color: #f39626;
    padding-left: .5rem;
  }

  @media (min-width: 1440px) {
    margin: auto 30rem;
  }
`;

export default Advocacy;
