import React from "react";
import PropTypes from "prop-types";
import { StyleBtn, StyleBtnText } from "./styles";

export const BtnCommon = props => {
  return (
    <StyleBtn
      onClick={props.onClick}
      hoverColor={props.hoverColor}
      disabled={props.disabled}
      hoverBackgroundColor={props.hoverBackgroundColor}
      backgroundColor={props.backgroundColor}
    >
      {props.text && <StyleBtnText>{props.text}</StyleBtnText>}
    </StyleBtn>
  );
};

BtnCommon.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string
};

BtnCommon.defaultProps = {};
