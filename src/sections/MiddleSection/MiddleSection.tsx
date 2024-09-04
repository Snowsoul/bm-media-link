import React from "react";
import MiddleSectionStyled from "./MiddleSection.styled";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import testbg from "../../assets/images/test-bg.png";
import LinkButton from "../../components/LinkButton/LinkButton";
import brandLogo from "../../assets/svg/bm-logo.svg";

const { Container, ButtonsContainer, BrandLogo, BottomContainer } =
  MiddleSectionStyled;

function MiddleSection() {
  return (
    <Container>
      <VideoPlayer
        video="https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4"
        poster={testbg}
        duration="7 min"
      />
      <ButtonsContainer>
        <LinkButton hero label="View Instagram" icon="instagram" />
        <LinkButton label="Check YouTube" icon="youtube" />
        <LinkButton label="Hall of Fame" icon="bm" />
      </ButtonsContainer>

      <BottomContainer>
        <BrandLogo src={brandLogo} />
      </BottomContainer>
    </Container>
  );
}

export default MiddleSection;
