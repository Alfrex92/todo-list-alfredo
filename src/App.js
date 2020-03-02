import React from "react";
import ProjectsBody from "./components/ProjectsBody";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <div className="App">
      {/*CSS Reset is being handlle by Styled Components*/}
      <GlobalStyles></GlobalStyles>
      <ProjectsBody></ProjectsBody>
    </div>
  );
};

export default App;
