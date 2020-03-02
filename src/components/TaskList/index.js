import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { ProjectListContext } from "../../context/projectListContext";
import { TaskModalContext } from "../../context/taskModalContext";
import {
  StyleList,
  StyleTask,
  StyleActions,
  StyleCheckbox,
  StyleIconContainer,
  StyleTaskName
} from "./styles";

const TaskList = props => {
  const [, dispatch] = useContext(ProjectListContext);
  const { editTaskID, setEditTaskID, setIsEditTaskModalOpen } = useContext(
    TaskModalContext
  );
  const handleEditTask = id => {
    setIsEditTaskModalOpen(oldProps => !oldProps);
    setEditTaskID(id);
  };
  const handleCompletedTask = (id, completion) => {
    try {
      dispatch({
        type: "COMPLETED_TASK",
        payload: {
          completion,
          editTaskID: id,
          projectID: props.projectID
        }
      });
    } catch (error) {
      console.error("Error when trying to complete a task:", error);
    }
  };
  const handleRemoveTask = id => {
    if (id === editTaskID) {
      setIsEditTaskModalOpen(false);
      setEditTaskID("");
    }
    try {
      dispatch({
        type: "REMOVE_TASK",
        payload: {
          removeTaskID: id,
          projectID: props.projectID
        }
      });
    } catch (error) {
      console.log("Error when trying to delete a task", error);
    }
  };
  return (
    <StyleList>
      {(props.list &&
        props.list.length &&
        props.list.map((element, index) => {
          return (
            <StyleTask
              key={`${element.id}${index}`}
              completion={element.completion}
            >
              <StyleCheckbox
                onChange={() =>
                  handleCompletedTask(element.id, element.completion)
                }
                type="checkbox"
                value={(element && element.completion) || false}
                checked={(element && element.completion) || false}
              />
              <StyleTaskName>{element.name}</StyleTaskName>
              <StyleActions>
                <StyleIconContainer onClick={() => handleEditTask(element.id)}>
                  <FontAwesomeIcon icon={faEdit} size="1x" color="teal" />
                </StyleIconContainer>
                <StyleIconContainer
                  onClick={() => handleRemoveTask(element.id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} size="1x" color="teal" />
                </StyleIconContainer>
              </StyleActions>
            </StyleTask>
          );
        })) || <p>No tasks found</p>}
    </StyleList>
  );
};

TaskList.propTypes = {
  projectID: PropTypes.string,
  list: PropTypes.array
};

export default TaskList;
