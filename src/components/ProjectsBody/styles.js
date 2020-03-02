import styled from "styled-components";
import { space } from "../Styles/vars";
import { media } from "../Styles/tools";

export const StyleTaskListContainer = styled.div`
  padding: ${space.m};
`;

export const StyleLayout = styled.div`
  ${media.large`
    max-width: 992px;
    display: flex;
    margin: 0 auto;
    min-height: calc(100vh);
`}
`;

export const StylePanelsContainer = styled.div`
  ${media.large`
    flex-basis: 60%;
`}
`;
