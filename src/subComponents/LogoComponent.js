import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.color};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  @media (max-width: 30em) {
    top: 1rem;
    left: 1rem;
  }
`;

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme === "dark" ? darkTheme.text : darkTheme.body}>
      CB
    </Logo>
  );
};

export default LogoComponent;
