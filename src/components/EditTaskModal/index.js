import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import EditInputs from "../EditInputs";

const EditTaskModal = props => {
  return (
    <Modal toggleModal={props.toggleModal} isModalOpen={props.isOpen}>
      <EditInputs
        projectID={props.projectID}
        id={props.id}
        list={props.list}
      ></EditInputs>
    </Modal>
  );
};

EditTaskModal.propTypes = {
  projectID: PropTypes.string,
  id: PropTypes.string,
  list: PropTypes.array,
  isModalOpen: PropTypes.bool,
  toggleModal: PropTypes.func
};

export default EditTaskModal;
