import React from 'react';
import projectsData from "../../utils/projectsData";
import Project from './Project/Project';

const Projects = () => {
    const projects = projectsData.projects;
    // console.log(projectsData.projects);
    console.log(projects);
    return (
        <div>
            {
                projects.map(project => (<Project project={project}></Project>))
            }
        </div>
    );
};

export default Projects;