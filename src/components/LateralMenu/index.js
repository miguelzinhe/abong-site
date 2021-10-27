import React from 'react';
import styled from 'styled-components';
import './style.css'

const NavBar = styled.nav`
  margin: 0;
  padding: 0;
  right: 17px;
  margin-top: -32px;
  top: 50%;
  position: fixed;
  z-index: 999;

  ul {
    list-style-type: none;
  }

  li {
    border-radius: 50%;
    background-color: #000;
    cursor: pointer;
    width: 20px;
    height: 20px;
    text-align: center;
    margin-bottom: 2px
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`

const LateralMenu = () => {
  return (
    <NavBar>
      <ul>
        <li>
          <a href="#slide1">
            1
          </a>
        </li>        
        <li>
          <a href="#slide2">
            2
          </a>
        </li>
        <li>
          <a href="#slide3">
            3
          </a>
        </li>
        <li>
          <a href="#slide4">
            4
          </a>
        </li>
        <li>
          <a href="#slide5">
            5
          </a>
        </li>
        <li>
          <a href="#slide6">
            6
          </a>
        </li>
        <li>
          <a href="#slide7">
            7
          </a>
        </li>
      </ul>
    </NavBar>
  );
}

export default LateralMenu;
