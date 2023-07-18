import React, {FunctionComponent, useRef} from "react";
import styled, {css} from "styled-components";
import {
    Container,
    Stack,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";

import SkillsBoxes from "./SubSections/SkillsBoxes";
import ToolsBoxes from "./SubSections/ToolsBoxes";


const ContainerWrapperClass = {
    display: "flex",
    padding: "5% 0",
    minHeight: "65vh",
};

const RightSide = styled.div`
  flex: 1;
  padding: 10px;
`;

const LeftSide = styled.div`
  flex: 1.2 1 0%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  ${css`
    /* styles for mobile devices */
    @media (max-width: 768px) {
      justify-content: center;
    }
  `}
`;

const Skills: FunctionComponent = () => {
    const containerRef = useRef(null);

    const [alignment, setAlignment] = React.useState("skills");


    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: React.SetStateAction<string>) => {
        if (alignment !== newAlignment && newAlignment) {
            setAlignment(newAlignment);
        }
    };
    return (

        <Container sx={ContainerWrapperClass} ref={containerRef}>
            <RightSide>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{fontWeight: "bold", color: "secondary.main"}}
                >
                    Skillset and Tools
                </Typography>
                <p>
                    I develop simple, intuitive and responsive user interfaces with fast, scalable and secure backend
                    servers.
                </p>

                <Stack
                    spacing={2}
                    direction="row"
                    ref={containerRef}
                    sx={{
                        "@media (min-width: 200px) and (max-width: 1023px)": {
                            justifyContent: "center",
                        },
                    }}
                >
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="skills">Skills</ToggleButton>
                        <ToggleButton value="tools">Tools</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </RightSide>
            <LeftSide>
                {alignment === "skills" ? <SkillsBoxes/> : <ToolsBoxes/>}
            </LeftSide>
        </Container>

    );
};

export default Skills;
