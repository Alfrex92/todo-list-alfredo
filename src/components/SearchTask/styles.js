import styled from "styled-components";
import { space, colors, fsize } from "../Styles/vars";

export const StyleSearchContainer = styled.div`
  display: flex;
  font-size: ${fsize.small};
`;

export const StyleSearchIcon = styled.span`
  padding: ${space.s};
  background-color: ${colors.blue.normal};
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
`;

// without -webkit-appearance: none; the style doesn't work in Safari
export const StyleInputSearch = styled.input`
  width: 100%;
  padding: ${space.s};
  color: ${colors.grey.normal};
  border: none;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  -webkit-appearance: none;
`;
