import { Grid, GridListTileBar, Typography } from '@material-ui/core';
import React from 'react';
import "./Portfolio.css";
import resumeData from '../../../utils/resumeData';
import About from '../About/About';
import Skills from '../Skills/Skills';
import WorkEducation from '../WorkEducation/WorkEducation';

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