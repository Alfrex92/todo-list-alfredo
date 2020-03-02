import React from "react";
import { StyleContainer } from "./styles";

const Container = props => {
  return <StyleContainer>{props.children}</StyleContainer>;
};

export default Container;
