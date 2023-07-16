import {Box, Tooltip} from "@mui/material";
import React from "react";
import styled from "styled-components";

const Logo = styled.img`
  width: 3rem;
`;
export default function ToolsAndSkillsBox({...props}) {
    return (
        <Tooltip title={props.help} arrow>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "5rem",
                    width: "5rem",
                    margin: "0 0.5rem 1rem",
                    cursor: "help",
                    borderRadius: "10px",
                    bgcolor: "#222",
                    boxShadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
                    transition: "all 1s ease-in",
                    "&:hover": {},
                }}
            >
                <Logo src={props.icon} alt={props.icon}/>
            </Box>
        </Tooltip>
    );
};