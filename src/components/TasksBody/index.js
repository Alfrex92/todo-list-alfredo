import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TaskList from "../TaskList";
import SearchTask from "../SearchTask";
import { StyleSearchTaskContainer } from "./styles";
const TasksBody = props => {
  const [searchWordState, setSearchWordState] = useState();
  const [taskListState, setTaskListState] = useState([]);

  useEffect(() => {
    if (!searchWordState || !searchWordState.trim())
      return setTaskListState(props.list || []);
    const filterValueInsensitive = searchWordState.toLowerCase();
    const filtered = props.list.filter(task => {
      return (
        (task.name &&
          task.name.toLowerCase().includes(filterValueInsensitive)) ||
        (task.description &&
          task.description.toLowerCase().includes(filterValueInsensitive))
      );
    });
    setTaskListState(filtered);
  }, [props.list, searchWordState]);

  return (
    <div>
      <StyleSearchTaskContainer>
        <SearchTask setSearchWord={setSearchWordState}></SearchTask>
      </StyleSearchTaskContainer>
      <TaskList projectID={props.projectID} list={taskListState}></TaskList>
    </div>
  );
};

TasksBody.propTypes = {
  projectID: PropTypes.string,
  list: PropTypes.array
};
export default TasksBody;
