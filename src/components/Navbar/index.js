import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import {
  StyleNavbar,
  StyleTabsContainer,
  StyleIconContainer,
  StyleGlobalBody,
  StyleTitle
} from "./styles";

const Navbar = props => {
  const [isProjectsOpenState, setIsProjectsOpenState] = useState();
  return (
    <StyleNavbar>
      <StyleGlobalBody lockBody={isProjectsOpenState} />
      <StyleIconContainer
        onClick={() => setIsProjectsOpenState(oldProps => !oldProps)}
      >
        <FontAwesomeIcon
          icon={isProjectsOpenState ? faTimes : faBars}
          size="1x"
          color="white"
        />
      </StyleIconContainer>
      <StyleTabsContainer isOpen={isProjectsOpenState}>
        <StyleTitle>Lists:</StyleTitle>
        {props.children}
      </StyleTabsContainer>
    </StyleNavbar>
  );
};

export default Navbar;
