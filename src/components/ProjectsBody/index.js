import React, { useContext } from "react";
import Container from "../Container";
import EditTaskModal from "../EditTaskModal";
import Navbar from "../Navbar";
import { ProjectListContext } from "../../context/projectListContext";
import { Tabs } from "react-tabs";
import { TabList, Tab, TabPanel } from "../Tabs/styles";
import { TaskModalContext } from "../../context/taskModalContext";
import AddTaskForm from "../AddTaskForm";
import TasksBody from "../TasksBody";
import {
  StyleTaskListContainer,
  StyleLayout,
  StylePanelsContainer
} from "./styles";

const ProjectsBody = () => {
  const [projectList] = useContext(ProjectListContext);
  const {
    editTaskID,
    isEditTaskModalOpen,
    setIsEditTaskModalOpen
  } = useContext(TaskModalContext);
  return (
    <div>
      <Tabs>
        <StyleLayout>
          <Navbar>
            <TabList>
              {projectList &&
                projectList.map((project, index) => (
                  <Tab key={`${project.projectID}tab${index}`}>
                    {project.projectName}
                  </Tab>
                ))}
            </TabList>
          </Navbar>
          <StylePanelsContainer>
            {projectList &&
              projectList.map((project, index) => (
                <TabPanel key={`${project.projectID}panel${index}`}>
                  <Container>
                    <StyleTaskListContainer>
                      <AddTaskForm
                        projectName={project.projectName}
                        projectID={project.projectID}
                      ></AddTaskForm>
                      <TasksBody
                        list={project.tasks}
                        projectID={project.projectID}
                      ></TasksBody>
                      <EditTaskModal
                        isOpen={isEditTaskModalOpen}
                        id={editTaskID}
                        projectID={project.projectID}
                        list={project.tasks}
                        toggleModal={setIsEditTaskModalOpen}
                      ></EditTaskModal>
                    </StyleTaskListContainer>
                  </Container>
                </TabPanel>
              ))}
          </StylePanelsContainer>
        </StyleLayout>
      </Tabs>
    </div>
  );
};

export default ProjectsBody;
