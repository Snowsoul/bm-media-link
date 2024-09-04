import React, { Fragment } from "react";
import Title from "../../components/Title/Title";
import TopSectionStyled from "./TopSection.styled";
import SubTitle from "../../components/SubTitle/SubTitle";
import Avatar from "../../components/Avatar/Avatar";
import avatarExampleImage from "../../assets/images/avatar-example.png";
import AvatarLabel from "../../components/AvatarLabel/AvatarLabel";

const { Container } = TopSectionStyled;

function TopSection() {
  return (
    <Container>
      <Title label="Toyota GT86" />
      <SubTitle label="200hp - 2.0 Boxer Engine" />
      <Avatar image={avatarExampleImage} />
      <AvatarLabel label="@86now" />
    </Container>
  );
}

export default TopSection;
