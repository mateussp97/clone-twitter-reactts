import React from "react";
import { Container } from "./styles";

interface Props {
  heading: string;
  title: string;
}

const News: React.FC<Props> = ({ heading, title }) => {
  return (
    <Container>
      <span>{heading}</span>
      <strong>{title}</strong>
    </Container>
  );
};

export default News;
