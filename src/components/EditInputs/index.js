import React, { useContext, useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { ProjectListContext } from "../../context/projectListContext";
import { BtnCommon } from "../Btn";
import { priorityList } from "../../constants/inputs";
import {
  StyleEditInputs,
  StyleSecondaryInputsContainer,
  StyleCheckbox,
  StyleInputName,
  StyleInputNameContainer,
  StyleDescription,
  StyleLabel
} from "./styles";
const EditInputs = props => {
  const [editInputState, setEditInputState] = useState();

  const [, dispatch] = useContext(ProjectListContext);
  useEffect(() => {
    const editElement =
      (props.list && props.list.find(element => element.id === props.id)) || [];
    setEditInputState(editElement);
  }, [props.id, props.list]);
  const handleChange = event => {
    const inputValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const inputProperty = event.target.name;
    setEditInputState(state => {
      return {
        ...state,
        [inputProperty]: inputValue
      };
    });
  };
  const handleEditTask = async event => {
    event.preventDefault();
    let [
      editTaskName,
      editTaskCompletion,
      editTaskDescription,
      editTaskPriority
    ] = event.target.elements;
    try {
      dispatch({
        type: "EDIT_TASK",
        payload: {
          editTask: {
            id: props.id,
            name: editTaskName.value,
            description: editTaskDescription.value,
            priority: editTaskPriority.value,
            completion: editTaskCompletion.checked
          },
          projectID: props.projectID
        }
      });
    } catch (error) {
      console.error("Error when trying to update a Task", error);
    }
  };
  return (
    <StyleEditInputs>
      <form onSubmit={handleEditTask}>
        <StyleInputNameContainer>
          <StyleInputName
            type="text"
            name="name"
            id="editTaskName"
            value={(editInputState && editInputState.name) || ""}
            onChange={handleChange}
          />
          <StyleCheckbox
            onChange={handleChange}
            type="checkbox"
            name="completion"
            id="editTaskCompletion"
            value={(editInputState && editInputState.completion) || false}
            checked={(editInputState && editInputState.completion) || false}
          />
        </StyleInputNameContainer>

        <StyleSecondaryInputsContainer>
          <div>
            <StyleLabel>Description:</StyleLabel>
            <StyleDescription
              type="text"
              name="description"
              id="editTaskDescription"
              value={(editInputState && editInputState.description) || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <StyleLabel>Priority:</StyleLabel>
            <select
              value={(editInputState && editInputState.priority) || ""}
              onChange={handleChange}
              name="priority"
              id="editTaskPriority"
            >
              {priorityList.map((priority, index) => (
                <Fragment key={`${index}${priority}`}>
                  <option value={priority}>{priority}</option>
                </Fragment>
              ))}
            </select>
          </div>
        </StyleSecondaryInputsContainer>
        <BtnCommon type="submit" text={"Update Task"} />
      </form>
    </StyleEditInputs>
  );
};

EditInputs.propTypes = {
  projectID: PropTypes.string,
  id: PropTypes.string,
  list: PropTypes.array
};

export default EditInputs;
