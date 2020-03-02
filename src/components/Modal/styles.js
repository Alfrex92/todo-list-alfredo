import styled, { createGlobalStyle, keyframes } from "styled-components";
import { space } from "../Styles/vars";
import { media } from "../Styles/tools";

export const StyleGlobalBody = createGlobalStyle`
  body {
  overflow: ${props => (props.lockBody ? "hidden" : null)};
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  } 
  100% {
    opacity: 0;
  }
`;

export const StyleModalContainer = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  animation: ${props => (props.showModal ? fadeIn : fadeOut)} 400ms ease-in;
  ${media.med`
    display: grid;
    grid-template-columns: 1fr 600px;
    top: 0;
  `}
`;

export const StyleModalCard = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
  grid-column-start: 2;
  z-index: 10;
  ${media.large`
    padding: ${space.m} ${space.m} ${space.m} ${space.m};
  `}
`;

export const StyleCloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
  cursor: pointer;
`;

export const StyleBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(102, 102, 102, 0.5);
  opacity: 0.8;
`;
