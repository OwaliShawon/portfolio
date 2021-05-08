import { Grid, GridListTileBar, Typography } from '@material-ui/core';
import React from 'react';
import "./Portfolio.css";
import resumeData from '../../../utils/resumeData';
import About from '../About/About';
import WorkEducation from '../WorkEducation/WorkEducation';
import Skills from '../skills/skills.component';


const Portfolio = () => {
    const about = resumeData.aboutme;
    return (
        <main className="main-container">
            {/* about me */}
            <About></About>
            <Skills></Skills>
            <WorkEducation></WorkEducation>
        </main>
    );
};

export default Portfolio;