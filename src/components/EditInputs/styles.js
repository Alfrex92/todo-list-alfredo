import styled from "styled-components";
import { space, colors, fweight } from "../Styles/vars";

export const StyleEditInputs = styled.div`
  background-color: white;
  height: 100%;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: ${space.m};
`;

export const StyleSecondaryInputsContainer = styled.div`
  margin-bottom: ${space.l};
`;

export const StyleCheckbox = styled.input``;

export const StyleInputName = styled.input`
  padding: ${space.s};
  width: 100%;
  outline: 1px solid #ddd;
  color: ${colors.grey.normal};
  margin-right: ${space.xs};
`;

export const StyleInputNameContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: ${space.l};
  margin-bottom: ${space.l};
  grid-column-gap: ${space.m};
  align-items: center;
`;

export const StyleDescription = styled.textarea`
  border: none;
`;

export const StyleLabel = styled.p`
  margin-bottom: ${space.m};
  font-weight: ${fweight.w6};
  border-bottom: 1px solid #f0f0f0;
`;
