import styled from "styled-components";
import BaseText from "../BaseText/BaseText.styled";
import Icon from "../Icon/Icon";

const VideoPlayerLabelStyled = {
  Container: styled.div`
    background-color: ${(props) => props.theme.colors.black};
    padding: 6px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    position: relative;
    z-index: 3;
  `,
  Label: styled(BaseText)`
    color: ${(props) => props.theme.colors.white};
    font-size: 10px;
  `,
  IconContainer: styled.div`
    display: flex;
    margin-right: 4px;
  `,
  Icon: styled(Icon.Video)`
    width: 14px;
    height: 14px;
  `,
};

export default VideoPlayerLabelStyled;
