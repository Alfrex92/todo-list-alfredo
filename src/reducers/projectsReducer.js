export const projectsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const { newTask, projectID } = action.payload;
      return state.map(project =>
        project.projectID === projectID
          ? { ...project, tasks: [...project.tasks, newTask] }
          : project
      );
    }
    case "EDIT_TASK": {
      const { editTask, projectID } = action.payload;

      return state.map(project =>
        project.projectID === projectID
          ? {
              ...project,
              tasks: project.tasks.map(task =>
                task.id === editTask.id ? editTask : task
              )
            }
          : project
      );
    }
    case "COMPLETED_TASK": {
      const { completion, projectID, editTaskID } = action.payload;
      return state.map(project =>
        project.projectID === projectID
          ? {
              ...project,
              tasks: project.tasks.map(task =>
                task.id === editTaskID
                  ? { ...task, completion: !completion }
                  : task
              )
            }
          : project
      );
    }
    case "REMOVE_TASK": {
      const { removeTaskID, projectID } = action.payload;
      return state.map(project =>
        project.projectID === projectID
          ? {
              ...project,
              tasks: project.tasks.filter(task => task.id !== removeTaskID)
            }
          : project
      );
    }
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};
