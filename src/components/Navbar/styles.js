import styled, { createGlobalStyle } from "styled-components";
import { space, colors, zindex } from "../Styles/vars";
import { media } from "../Styles/tools";

export const StyleNavbar = styled.nav`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${colors.grey.dark};
  ${media.large`
    height: auto;
    background-color: unset;
    flex-basis: 40%;
    box-shadow: 1px 0 0 0 #f1f1f1; /* Border right */

  `}
`;

export const StyleIconContainer = styled.div`
  padding: ${space.s};
  ${media.large`
    display:none;
  `}
`;

//navbar size: 50px

export const StyleTabsContainer = styled.div`
  position: fixed;
  top: 50px;
  width: 100%;
  height: 100%;
  padding: ${space.l};
  transform: ${props =>
    props.isOpen ? "translate3D(0, 0, 0)" : "translate3D(-100%, 0, 0)"};
  z-index: ${zindex.alpha};
  transition: transform 0.2s ease;
  background-color: ${colors.grey.light};
  ${media.large`
    position: static;
    background-color: unset;
    transform: translate3D(0, 0, 0);
    z-index: auto;
  `}
`;

export const StyleGlobalBody = createGlobalStyle`
  body {
  overflow: ${props => (props.lockBody ? "hidden" : null)};
  ${media.large`
    overflow: unset;
  `}
  }
`;

export const StyleTitle = styled.p`
  color: ${colors.red.normal};
  margin-bottom: ${space.m};
`;
