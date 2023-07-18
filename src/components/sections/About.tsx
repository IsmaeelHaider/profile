import React, {FunctionComponent, useRef} from "react";
import styled from "styled-components";
import {Container, Stack, Button, Typography} from "@mui/material";
import ProfilePic from "../../assets/about/profile-pic.png";
import {Link} from "react-router-dom";
import {saveAs} from "file-saver";

const ContainerWrapperClass = {
    display: "flex",
    padding: "5% 0",
    "@media (min-width: 200px) and (max-width: 1023px)": {
        flexDirection: "column",
        alignItems: "center",
    },
};

const HeadingWrapperClass = {
    fontWeight: "bold",
    color: "secondary.main",
};

const RightSide = styled.div`
  flex: 1;
  padding: 10px;
`;

const LeftSide = styled.div`
  flex: 1 1 0%;
  padding: 5%;
  display: flex;
  flex-direction: column;
`;

const About: FunctionComponent = () => {
    const containerRef = useRef(null);

    const downloadPDF = () => {
        saveAs(require("../../download/IsmaeelHaider.pdf"), "IsmaeelHaider.pdf");
    };

    return (
        <Container sx={ContainerWrapperClass} ref={containerRef}>
            <RightSide>
                <img
                    className="profile-picture"
                    alt="profilePicture"
                    src={ProfilePic}
                />
            </RightSide>
            <LeftSide>
                <Typography variant="h4" gutterBottom sx={HeadingWrapperClass}>
                    About Me!
                </Typography>
                <p className="about-me">
                    Hi! I'm Ismaeel Haider, and I am an experienced full-stack
                    developer / data engineer with 7+ years of experience. On the frontend I am
                    proficient with ReactJS. I've created captivating and responsive user interfaces using React with
                    bootstrap and MUI.
                    On the back-end, I excel in serverless architecture, AWS Services, Python, FastAPI, Flask, and
                    Django, with both monolithic and microservice architectures. I'm expert in creating scalable and
                    efficient server-side solutions. I've also created plenty of data warehouses and data lakes which
                    powered BI tools and AI/ML algorithms.
                </p>
                <p>
                    I have extensive experience collaborating on projects involving multinational clients and diverse
                    teams, employing a unified approach like the one-team model and following agile methodologies such
                    as Sprint planning and Scrum. This includes utilizing various tools like Jira, Kanban model, Trello,
                    Slack, Teams, Git versioning, and CI/CD pipelines. I am dedicated to writing clean code and have a
                    strong commitment to continuous learning, striving to deliver software solutions of the highest
                    quality. I believe in fostering a collaborative and detail-oriented team environment, and I thrive
                    on embracing new challenges and surpassing client expectations.
                </p>
                <p>
                    Connect with me today to bring your project to life with my expertise.
                </p>

                <Stack spacing={2} direction="row" ref={containerRef}>
                    <Button variant="contained" component={Link} to="/#contact">
                        Hire Me
                    </Button>
                    <Button variant="outlined" onClick={downloadPDF}>
                        Download CV
                    </Button>
                </Stack>
            </LeftSide>
        </Container>
    );
};

export default About;
