import React from "react";
import MiddleSectionStyled from "./MiddleSection.styled";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import testbg from "../../assets/images/test-bg.png";

const { Container } = MiddleSectionStyled;

function MiddleSection() {
  return (
    <Container>
      <VideoPlayer
        video="https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4"
        poster={testbg}
        duration="7 min"
      />
    </Container>
  );
}

export default MiddleSection;
