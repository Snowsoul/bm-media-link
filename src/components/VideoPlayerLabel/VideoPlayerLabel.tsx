import React from "react";
import VideoPlayerLabelStyled from "./VideoPlayerLabel.styled";

const { Container, Label, IconContainer, Icon } = VideoPlayerLabelStyled;

interface VideoPlayerLabelProps {
  label: string;
}

function VideoPlayerLabel({ label }: VideoPlayerLabelProps) {
  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Label>{label}</Label>
    </Container>
  );
}

export default VideoPlayerLabel;
