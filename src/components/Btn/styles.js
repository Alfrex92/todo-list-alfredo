import styled from "styled-components";
import { colors, space, fweight, fsize } from "../Styles/vars";
import { media } from "../Styles/tools";

export const StyleBtn = styled.button`
  min-width: 103px;
  min-height: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.borderColor || colors.red.normal};
  border-radius: 4px;
  font-weight: ${fweight.w7};
  color: ${props =>
    props.disabled ? colors.grey.light : props.color || colors.red.normal};
  padding: ${space.xs};
  transition: color 0.2s linear, background-color 0.2s linear;
  cursor: pointer;
  ${media.large`
    :hover:enabled {
      background-color: ${props =>
        props.hoverBackgroundColor || colors.red.normal};
        color: ${props => props.hoverColor || colors.white.normal};
    }
    :hover {
      transition: color  0.2s linear, background-color 0.2s linear;
    }
  `}
`;

export const StyleBtnText = styled.span`
  font-size: ${fsize.small};
`;
