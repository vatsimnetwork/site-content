import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";

import { P } from "../../src/components/mdx/Elements";
import { hrefStyles, highlightHref } from "../../src/styles";

const Container = styled.blockquote`
  background-color: #f6f8fd;
  margin: var(--l) 0;
`;

const Header = styled.div`
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  padding: var(--l);
  border-bottom: 1px solid #d3defa;
  /* font-style: italic; */

  & > a {
    ${hrefStyles};
    ${highlightHref}
  }
`;

const Content = styled.div`
  padding: var(--l);
  position: relative;
  display: flex;
  align-items: center;
  font-style: italic;
`;

export interface ReferencequoteProps {
  reference: string;
  referenceLink: string;
  quote: string;
}

const Referencequote = ({
  reference,
  referenceLink,
  quote,
}: ReferencequoteProps) => {
  return (
    <Container>
      <Header>
        <Link to={referenceLink}>{reference}</Link>
      </Header>
      <Content>
        <P>{quote}</P>
      </Content>
    </Container>
  );
};

export default Referencequote;
