import { Grid, Icon, Typography } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React from 'react';
import resumeData from "../../../utils/resumeData";

const WorkEducation = () => {
    return (
        <Grid item xs={12}>
            <Grid container>
                {/* ?workExperience */}
                <Grid item sm={12} md={6}>

                </Grid>
                {/* education */}
                <Grid item sm={12} md={6}>
                    <Timeline>
                        {
                            resumeData.education.map((education) => (
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot className="timeline-dot-header">{<Icon />}</TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant="h6" className="timeline-header">{education.title}</Typography>
                                        <Typography variant="caption" className="timeline-header">{education.date}</Typography>
                                        <Typography variant="body2" className="timeline-header">{education.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))
                        }
                    </Timeline>
                </Grid>
            </Grid>

        </Grid>
    );
};

export default WorkEducation;