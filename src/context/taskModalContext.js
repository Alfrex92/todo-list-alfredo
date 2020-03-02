import React, { createContext, useState } from "react";
export const TaskModalContext = createContext();

export const TaskModalProvider = props => {
  const [editTaskID, setEditTaskID] = useState("");
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const value = {
    editTaskID,
    setEditTaskID,
    isEditTaskModalOpen,
    setIsEditTaskModalOpen
  };
  return (
    <TaskModalContext.Provider value={value}>
      {props.children}
    </TaskModalContext.Provider>
  );
};
