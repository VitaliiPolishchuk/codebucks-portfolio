import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Me from "../assets/Images/profile-img.png";
import { darkTheme } from "./Themes";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 55vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  @media (max-width: 48em) {
    background: linear-gradient(
          to top,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        left,
      linear-gradient(
          to bottom,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        left;
    background-size: 2px 100%;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    border-left: none;
    border-right: none;
    flex-direction: column;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  border-left: none;
  border-right: none;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    width: calc(100% - 4px);
    .pic {
      /* width: auto; */
    }
  }

  @media (max-width: 48em) {
    height: 100%;
    border-left: 2px solid ${(props) => props.theme.body};
    border-right: 2px solid ${(props) => props.theme.body};
    .pic {
      width: auto;
      position: fixed;
      height: 50%;
    }
  }
`;

const Text = styled.div`
  font-size: calc(1rem + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  @media (max-width: 48em) {
    font-size: calc(1rem + 1vw);
    padding: 1rem;
    padding-bottom: 0;
    & > *:last-child {
      margin-top: 1rem;
      font-size: calc(0.5rem + 1.5vw);
    }
  }
`;

const ImageContainer = styled(motion.div)``;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Vitalii Polishchuk</h3>
          <h6>I develop front-end and back-end sides of beautiful websites</h6>
        </Text>
      </SubBox>
      <SubBox theme={darkTheme}>
        <ImageContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </ImageContainer>
      </SubBox>
    </Box>
  );
};

export default Intro;
