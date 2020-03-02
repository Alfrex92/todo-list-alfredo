import styled from "styled-components";
import { space, colors } from "../Styles/vars";

export const StyleList = styled.ul`
  display: grid;
  grid-row-gap: ${space.xxs};
`;

export const StyleTask = styled.li`
  height: 47px;
  display: grid;
  grid-template-columns: 1fr 8fr 1.5fr;
  align-items: center;
  border-radius: 3px;
  background-color: ${colors.white.normal};
  color: ${colors.black.normal};
  text-decoration: ${props => props.completion && "line-through"};
  opacity: ${props => props.completion && ".6"};
`;

export const StyleActions = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyleCheckbox = styled.input`
  margin: 0 auto;
`;

export const StyleIconContainer = styled.div`
  cursor: pointer;
`;

export const StyleTaskName = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
