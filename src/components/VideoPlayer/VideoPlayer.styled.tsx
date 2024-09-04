import styled from "styled-components";

const VideoPlayerStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    margin: 28px 0 41px 0;
  `,
  IconContainer: styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    z-index: 3;
  `,
  DurationContainer: styled.div`
    position: absolute;
  `,
  VideoContainer: styled.div``,
  VideoOverlay: styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
  `,
  VideoOverlayContainer: styled.div`
    position: relative;
    max-width: 100%;
    border-radius: 16px;
    height: 226px;
    overflow: hidden;
  `,
  Video: styled.video`
    max-width: 100%;
    border-radius: 16px;
  `,
};

export default VideoPlayerStyled;
