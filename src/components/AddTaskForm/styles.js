import styled from "styled-components";
import { space, colors } from "../Styles/vars";

export const StyleAddTaskInputContainer = styled.div``;

export const StyleInput = styled.input`
  padding: ${space.s};
  width: 100%;
  outline: 1px solid #ddd;
  color: ${colors.grey.normal};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ddd;
  }
  :-ms-input-placeholder {
    color: #ddd;
  }
`;
