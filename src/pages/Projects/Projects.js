import React from 'react';
import projectsData from "../../utils/projectsData";
import TimeLine from './projects-timeline/projects-timeline.component';


const Projects = () => {
    const projects = projectsData.projects;
    // console.log(projectsData.projects);
    console.log(projects);
    return (
        <div>
            <h1 className="pt-3 text-center pb-3">PROJECTS</h1>
            <TimeLine></TimeLine>
        </div>
    );
};

export default Projects;