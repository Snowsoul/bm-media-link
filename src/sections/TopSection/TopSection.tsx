import React, { Fragment } from "react";
import Title from "../../components/Title/Title";
import TopSectionStyled from "./TopSection.styled";
import SubTitle from "../../components/SubTitle/SubTitle";

const { Container } = TopSectionStyled;

function TopSection() {
  return (
    <Container>
      <Title label="Toyota GT86" />
      <SubTitle label="200hp - 2.0 Boxer Engine" />
    </Container>
  );
}

export default TopSection;
