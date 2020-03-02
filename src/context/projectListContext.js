import React, { createContext, useReducer } from "react";
import { projectsReducer } from "../reducers/projectsReducer";
import { projectsMockupData } from "../data/projectsMockupData";
export const ProjectListContext = createContext();

export const ProjectListProvider = props => {
  const value = useReducer(projectsReducer, projectsMockupData);
  return (
    <ProjectListContext.Provider value={value}>
      {props.children}
    </ProjectListContext.Provider>
  );
};
