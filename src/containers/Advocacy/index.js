import React from 'react';
import SitesList from '../../components/SitesList/SitesList';
import styled from 'styled-components';
import AdvocacyImage from "../../images/advocacy-img.png";

const Advocacy = () => {

  const sites = [
    {
      "id": "RNP+",
      "name": "Rede Nacional de Pessoas Vivendo com HIV/Aids (RNP+)",
      "site_url": "https://"
    },
    {
      "id": "MNCP",
      "name": "Movimento Nacional das Cidadãs Posithivas (MNCP)",
      "site_url": "https://"
    },
    {
      "id": "soropositivo.org",
      "name": "www.soropositivo.org",
      "site_url": "https://"
    },
    {
      "id": "agenciaaids.com.br",
      "name": "www.agenciaaids.com.br",
      "site_url": "https://"
    },
    {
      "id": "apta.org.br",
      "name": "www.apta.org.br",
      "site_url": "https://"
    },
    {
      "id": "aids.gov.br",
      "name": "www.aids.gov.br",
      "site_url": "https://www.aids.gov.br"
    },
    {
      "id": "unaids.org.br",
      "name": "www.unaids.org.br",
      "site_url": "https://unaids.org.br"
    },
    {
      "id": "abiaids.org.br",
      "name": "https://www.abiaids.org.br",
      "site_url": "https://abiaids.org.br"
    },
    {
      "id": "boa-sorte",
      "name": "Projeto Boa Sorte (Youtube)",
      "site_url": "https://www.youtube.com/channel/UCcg2yzyxjl1Lc8LMjo6y1Tg"
    }
  ]
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `cartilha.pdf`;
    link.href = "./assets/cartilha.pdf";
    link.click();
  };

  return (
    <AdvocacySection>
      <AdvocacyHeader>
        <img src={AdvocacyImage} alt="Logo" />
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
          <Download>
            <button className="download" onClick={onDownload}>
              Baixe agora a Cartilha
            </button>
          </Download>
      </AdvocacyText>
    </AdvocacySection>
  );
};

const Download = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;

  .download {
    background-color: transparent;
    padding: 10px 30px;
    border: 0.3rem solid #f39626;
    color: #f39626;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }
`

const AdvocacySection = styled.section`
  margin-top: 4rem;
  height: 100%;
`;

const AdvocacyHeader = styled.div`
  position: relative;
  background-color: #f39626;
  display: flex;
  align-items: center;
  justify-content: center;

  :before {
    display: block;
    position: absolute;
    content: "";
    background: url("./img/advocacy-bg.svg") top no-repeat;
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
    background: url("./img/advocacy-bg.svg") bottom no-repeat;
    background-size: cover;
    height: 70px;
    width: 100%;
    bottom: -20px;
    z-index: 0;
  }

  img {
    z-index: 1000;
  }

  @media (max-width: 982px) {
    img {
      padding: 5rem 2rem;
    }
  }
`;

const AdvocacyText = styled.div`
  margin: 0 auto;
  padding: 3rem 2rem;
  font-size: 1.125rem;
  color: #f39626;

  @media (min-width: 720px) {
    width: 70vw;
  }

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
    margin: 2rem 1rem;
  }

  li {
    font: normal normal normal 16px/22px Rubik;
  }

  a {
    color: #f39626;
    padding-left: .5rem;
  }

  @media (min-width: 1440px) {
    margin: auto 15rem;
  }
`;

export default Advocacy;
