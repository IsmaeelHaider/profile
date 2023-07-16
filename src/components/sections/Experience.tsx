import React, {FunctionComponent, useEffect, useRef} from "react";
import styled from "styled-components";
import {Container, Typography} from "@mui/material";
import ExperienceTimeline from "./SubSections/ExperienceTimeline";
import {useLocation} from "react-router-dom";

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
  flex: 1 1 0%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  overflow: auto;
`;

const Experience: FunctionComponent = () => {
    const containerRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Update the URL when the section becomes visible
                    if (location.pathname !== "/#experience") {
                        window.history.pushState(null, "", "/#experience");
                    }
                }
            });
        }, options);

        const currentSectionRef = containerRef.current; // Store current ref value in a variable

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, [location]);

    return (
        <Container sx={ContainerWrapperClass} ref={containerRef}>
            <RightSide>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{fontWeight: "bold", color: "secondary.main"}}
                >
                    7+ Years of Experience With Many Successful Projects!
                </Typography>
                <p>
                    For approximately seven years, I have been actively involved in problem-solving and application
                    development. Consequently, I possess comprehensive knowledge of current trends, technologies, modern
                    system architecture, and design.
                </p>
                <p>
                    Throughout my career, I have proven to be a visionary and a
                    dependable software engineering partner for renowned brands. You can expect satisfactory outcomes
                    from my work.
                </p>
            </RightSide>
            <LeftSide>
                <ExperienceTimeline/>
            </LeftSide>
        </Container>
    );
};

export default Experience;
