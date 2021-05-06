import { Button, Typography } from '@material-ui/core';
import React from 'react';
import "./Profile.css";
import dp from "../../assests/images/dp.jpg";
import ProfileTimeline from '../Timeline/ProfileTimeline';
import resumeData from "../../utils/resumeData";

const Profile = () => {
    console.log(resumeData.name);
    return (
        <div className="profile container-shadow">
            <div className="profile-name">
                <Typography className="name">Owali Ullah Shawon</Typography>
                <Typography className="title">Full Stack Web Developer</Typography>
            </div>

            <figure className="profile-image">
                <img src={dp} alt="" />
            </figure>

            <div className="profile-information">
                <ProfileTimeline></ProfileTimeline>
                <br />
                <a href="https://drive.google.com/file/d/18WdBXUAPfcX3E1iPYWmJUtG0qM2o4vqK/view?usp=sharing"><Button>Download Resume</Button></a>
            </div>
        </div>
    );
};

export default Profile;