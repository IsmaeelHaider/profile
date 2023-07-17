import React, {FunctionComponent, useEffect, useRef} from "react";
import styled from "styled-components";
import {Container} from "@mui/material";
import ContactDetails from "./SubSections/ContactDetails";
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
  flex: 1.2 1 0%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Contact: FunctionComponent = () => {
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
                    if (location.pathname !== "/#contact") {
                        window.history.pushState(null, "", "/#contact");
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
                <ContactDetails/>
            </RightSide>
            <LeftSide>
                <></>
            </LeftSide>
        </Container>
    );
};

export default Contact;
