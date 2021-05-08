// import { Icon, Typography } from '@material-ui/core';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React from 'react';
import { Card } from 'react-bootstrap';
import resumeData from "../../../utils/resumeData";

const WorkEducation = () => {
    return (
        <>
            <h1 className="text-center  pb-4">EDUCATION</h1>
            <Card className="p-5">
                {
                    resumeData.education.map((education) => (
                        <>
                            <h3>{education.title}</h3>
                            <h6>{education.degree}</h6>
                            <small>{education.date}</small>
                            <h3>{education.description}</h3>
                        </>
                    ))
                }
            </Card>
        </>

    );
};

export default WorkEducation;