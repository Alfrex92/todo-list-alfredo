import React, { useEffect, useState } from "react";
import {
  StyleModalContainer,
  StyleCloseModal,
  StyleModalCard,
  StyleBackground,
  StyleGlobalBody
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const Modal = ({ isModalOpen, toggleModal, children }) => {
  const [renderState, setRenderState] = useState(isModalOpen);
  useEffect(() => {
    setTimeout(() => {
      setRenderState(isModalOpen);
    }, 350);
  }, [isModalOpen]);

  useEffect(() => {
    const escKey = e => {
      if (e.key === "Escape") {
        toggleModal(false);
      }
    };
    window.addEventListener("keyup", escKey);
    return () => {
      document.removeEventListener("keyup", escKey);
    };
  }, [isModalOpen, toggleModal]);
  return (
    renderState && (
      <StyleModalContainer showModal={isModalOpen}>
        <StyleGlobalBody lockBody={isModalOpen} />
        <StyleCloseModal onClick={() => toggleModal(oldProps => !oldProps)}>
          <FontAwesomeIcon icon={faTimes} color="gray" size="1x" />
        </StyleCloseModal>

        <StyleModalCard>{children}</StyleModalCard>
        <StyleBackground onClick={() => toggleModal(oldProps => !oldProps)} />
      </StyleModalContainer>
    )
  );
};

export default Modal;
