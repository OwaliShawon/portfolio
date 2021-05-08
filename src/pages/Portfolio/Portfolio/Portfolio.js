import React from 'react';
import resumeData from '../../../utils/resumeData';
import About from '../About/About';
import Skills from '../skills/skills.component';
import WorkEducation from '../WorkEducation/WorkEducation';
import "./Portfolio.css";


const Portfolio = () => {
    const about = resumeData.aboutme;
    return (
        <main className="main-container">
            <About></About>
            <Skills></Skills>
            <WorkEducation></WorkEducation>
        </main>
    );
};

export default Portfolio;