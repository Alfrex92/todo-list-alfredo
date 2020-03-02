import React from "react";
import { ProjectListProvider } from "./projectListContext";
import { TaskModalProvider } from "./taskModalContext";
const ProviderComposer = ({ contexts, children }) => {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );
};

const ContextProvider = ({ children }) => {
  return (
    <ProviderComposer
      contexts={[<ProjectListProvider />, <TaskModalProvider />]}
    >
      {children}
    </ProviderComposer>
  );
};

export { ContextProvider };
