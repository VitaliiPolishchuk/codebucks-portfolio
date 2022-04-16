import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media (max-width: 48em) {
    left: 0.5rem;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.color};

  @media (max-width: 48em) {
    height: 2rem;
  }
`;

const SocialIcons = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectWidth);

    return () => {
      window.removeEventListener("resize", detectWidth);
    };
  }, [windowWidth]);

  let iconWidth = 25;
  if (windowWidth < 768) {
    iconWidth = 20;
  }

  let lineHeight = "8rem";
  if (windowWidth < 768) {
    lineHeight = "2rem";
  }

  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/VitaliiPolishchuk" }}
        >
          <Github
            width={iconWidth}
            height={iconWidth}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/VitaliiPolishchuk" }}
        >
          <Twitter
            width={iconWidth}
            height={iconWidth}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/VitaliiPolishchuk" }}
        >
          <Facebook
            width={iconWidth}
            height={iconWidth}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/VitaliiPolishchuk" }}
        >
          <YouTube
            width={iconWidth}
            height={iconWidth}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>

      <Line
        initial={{ height: 0 }}
        animate={{ height: lineHeight }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
        color={props.theme === "dark" ? darkTheme.text : darkTheme.body}
      />
    </Icons>
  );
};

export default SocialIcons;
