import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import dp from "../../assests/images/dp.jpg";
import resumeData from "../../utils/resumeData";
import ProfileTimeline from '../Timeline/ProfileTimeline';
import "./Profile.css";

const Profile = () => {
    console.log(resumeData.name);
    return (
        <Navbar bg="light" expand="lg" sticky="top">
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
                    <a href="https://drive.google.com/file/d/18WdBXUAPfcX3E1iPYWmJUtG0qM2o4vqK/view?usp=sharing" >
                        <Button variant="contained" color="primary" size="small" style={{ margin: "5px" }} >Download Resume</Button>
                    </a>
                </div>
            </div>
        </Navbar>

    );
};

export default Profile;