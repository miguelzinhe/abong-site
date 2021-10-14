import React from 'react';
import styled from 'styled-components';
import HeaderImg from "../../images/header-img.svg";


const Header = () => {
  return (
    <HeaderSection className="header">
      <div className="HeaderImage">
        <img src={HeaderImg} alt="Logo" />
      </div>
    </HeaderSection>
  );
}

const HeaderSection = styled.section`
  text-align: center;
  padding: 10rem 0;
  background-color: #f39626;

  :after {
    display: block;
    position: absolute;
    content: "";
    background: url("./img/header-border.svg") bottom no-repeat;
    background-size: cover;
    height: 40px;
    width: 100%;
    bottom: -35px;
    z-index: 0;
  }

`;

export default Header;
