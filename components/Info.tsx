import React from "react";
import styled from "styled-components";

import { M_BREAKPOINT } from "../../src/styles";

const Container = styled.blockquote<{ background: string; border: string }>`
  padding: var(--l);
  line-height: 1.4rem;
  border-left: ${({ border }) => `9px solid ${border}`};
  background-color: ${({ background }) => background};
  margin-bottom: var(--m);

  @media (max-width: ${M_BREAKPOINT}px) {
    border-left: none;
    width: 100vw;
    margin-left: calc(var(--l) * -1);
  }
`;

const Label = styled.p`
  font-weight: var(--bold);
  text-transform: capitalize;
  margin-bottom: var(--s);
`;

const config = {
  info: {
    message: "note",
    background: "rgba(253, 255, 140, 0.2)",
    highlight: "#ffe564",
  },
  warning: {
    message: "note",
    background: "rgba(253, 255, 140, 0.2)",
    highlight: "#ffe564",
  },
  danger: {
    message: "caution",
    background: "rgba(237, 51, 21, 0.2)",
    highlight: "#ed3315",
  },
};

type Levels = keyof typeof config;

interface InfoProps {
  level: Levels;
  message: string;
}

const Info = ({ level, message }: InfoProps) => {
  return (
    <Container
      background={config[level].background}
      border={config[level].highlight}
    >
      <Label>{config[level].message}</Label>
      {message}
    </Container>
  );
};

export default Info;
