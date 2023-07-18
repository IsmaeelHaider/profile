import React from "react";
import ExperienceIcon from "@mui/icons-material/LocalPolice";
import ProjectsIcon from "@mui/icons-material/BusinessCenter";
import AchievementsIcon from "@mui/icons-material/MilitaryTech";
import {Box, Typography} from "@mui/material";
import styled from "styled-components";


const InnerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const IconSize = {
    fontSize: "50px",
};


export default function AchievementCard({...props}) {
    const cardIcon = () => {
        switch (props.image) {

            case "experience":
                return <ExperienceIcon sx={IconSize}/>;
            case "projects":
                return <ProjectsIcon sx={IconSize}/>;
            case "achievements":
                return <AchievementsIcon sx={IconSize}/>;
            default:
                return <h1>No project match</h1>
        }
    }

    return (
        <Box
            sx={{
                width: 400,
                height: 130,
                borderRadius: "10px",
                bgcolor: "#222",
                boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
                transition: "all 1s ease-in",
                "&:hover": {
                    backgroundColor: "primary.main",
                },
                "@media (min-width: 200px) and (max-width: 1023px)": {
                    marginLeft: "0px !important",
                    marginBottom: "20px !important",
                },
            }}
        >
            <InnerContainer>
                {cardIcon()}
                <ContentContainer>
                    <Typography variant="h5"
                                gutterBottom
                                sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        {props.title}
                    </Typography>
                    <Typography variant="h5"
                                gutterBottom
                                sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        {props.subTitle}
                    </Typography>
                </ContentContainer>
            </InnerContainer>
        </Box>
    );
};