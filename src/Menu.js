import React from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index:9;
  transition: transform 0.6s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color:#000;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #f44848;
    }
  }
`;


const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
       Home
      </a>
      <a href="/about">
        About us
      </a>
      <a href="/contact">
       Contact Us
      </a>
      <a href="/carrer">
       Carrer
      </a>
    </StyledMenu>
  );
};


export default Menu;
