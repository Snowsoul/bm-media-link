import styled, { css } from "styled-components";

const scaleTransition = css`
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export default scaleTransition;
