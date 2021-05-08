import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import resumeData from "../../../utils/resumeData";

const About = () => {
    const { aboutme } = resumeData;
    return (
        <Grid container className="section">
            <Grid item className="section-title">
                <Typography variant="h5" className="text-center">About Me</Typography>
            </Grid>
            <Grid>
                <Typography variant="h8">{aboutme}</Typography>
            </Grid>
        </Grid>
    );
};

export default About;