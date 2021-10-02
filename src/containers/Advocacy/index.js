import React from 'react';
import { useState, useEffect } from "react";
import SitesList from '../../components/SitesList/SitesList';
import styled from 'styled-components';
import './style.css'

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
      <AdvocacyText>
        <h2>O Advocacy <br/> na política de Aids</h2>
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
            return <SitesList key={site.id}  site={site} />;
          })}
        </ul>
      </AdvocacyText>
    </AdvocacySection>
  );
};

const AdvocacySection = styled.section`
  position: relative;
`;

const AdvocacyText = styled.div`
  margin: auto 3rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  font: normal normal normal 28px/32px Rubik;
  color: #f39626;

  h2 {
    font: normal normal normal 40px/44px Rubik;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  //TODO - List style type must be -
  ul {
    padding-left: 20px;
    margin-top: 2rem;
  }

  li {
    font: normal normal normal 16px/22px Rubik;
  }

  a {
    color: #f39626;
  }

  @media (min-width: 1440px) {
    margin: auto 30rem;
  }
`;

export default Advocacy;
