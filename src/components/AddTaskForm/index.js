import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ProjectListContext } from "../../context/projectListContext";
import useStickyState from "../../hooks/useStickyState";
import { StyleAddTaskInputContainer, StyleInput } from "./styles";
import { v4 as uuidv4 } from "uuid";

const AddTaskForm = props => {
  const [, dispatch] = useContext(ProjectListContext);
  // Save value in local storage
  const [taskState, setTaskState] = useStickyState("", "taskName");
  const handleAddTask = async event => {
    event.preventDefault();
    try {
      // very basic validation
      if (taskState.trim()) {
        dispatch({
          type: "ADD_TASK",
          payload: {
            newTask: {
              id: uuidv4(),
              name: taskState
            },
            projectID: props.projectID
          }
        });
        setTaskState("");
      }
    } catch (error) {
      console.error("Error when trying to create a new task", error);
    }
  };
  return (
    <form onSubmit={handleAddTask}>
      <StyleAddTaskInputContainer>
        <StyleInput
          type="text"
          id="name"
          required
          value={taskState}
          onChange={e => setTaskState(e.target.value)}
          placeholder={`Add a to-do in ${props.projectName}`}
        />
      </StyleAddTaskInputContainer>
    </form>
  );
};

AddTaskForm.propTypes = {
  projectID: PropTypes.string,
  projectName: PropTypes.string
};

export default AddTaskForm;
