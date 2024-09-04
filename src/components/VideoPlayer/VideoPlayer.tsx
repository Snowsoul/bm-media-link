import React, { Fragment, useRef, useState } from "react";
import VideoPlayerStyled from "./VideoPlayer.styled";
import Icon from "../Icon/Icon";
import VideoPlayerLabel from "../VideoPlayerLabel/VideoPlayerLabel";

interface VideoPlayerProps {
  video: string;
  label?: string;
  duration: string;
  poster: string;
}

const {
  Container,
  IconContainer,
  Video,
  VideoContainer,
  DurationContainer,
  VideoOverlayContainer,
  VideoOverlay,
} = VideoPlayerStyled;

function VideoPlayer({ video, label, duration, poster }: VideoPlayerProps) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function onPlay() {
    const player: any = videoRef.current;

    if (!player) return;

    player.play();
    setPlaying(true);
  }

  return (
    <Container>
      <VideoContainer>
        <VideoOverlayContainer>
          {!playing && (
            <Fragment>
              <VideoOverlay />
              <IconContainer onClick={onPlay}>
                <Icon.Play />
              </IconContainer>
              <DurationContainer />
            </Fragment>
          )}
          <Video
            ref={videoRef}
            src={video}
            poster={poster}
            controls={playing}
          />
        </VideoOverlayContainer>
      </VideoContainer>
      <VideoPlayerLabel label="GT86 - Midnight 4K" />
    </Container>
  );
}

export default VideoPlayer;
