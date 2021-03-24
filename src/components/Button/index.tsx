import React from "react";
import styled from "styled-components";

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? "transparent" : "var(--twitter)")};
  color: ${(props) => (props.outlined ? "var(--twitter)" : "var(--white)")};
  border: ${(props) => (props.outlined ? "1px solid var(--twitter)" : "none")};

  padding: 16px;
  border-radius: 24px;

  font-weight: bold;
  font-size: 16px;

  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.outlined ? "var(--twitter)" : "var(--twitter-light)"};

    color: ${(props) => (props.outlined ? "var(--white)" : "unset")};
  }
`;
