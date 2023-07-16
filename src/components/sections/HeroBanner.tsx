import React, {FunctionComponent, useEffect, useRef} from "react";
import styled, {css} from "styled-components";
import Container from "@mui/material/Container";
import {ReactComponent as TextSVG} from "../../assets/heroBanner/eng.svg";
import Button from "@mui/material/Button";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

const ContainerWrapperClass = {
    height: "100vh",
    "@media (min-width: 200px) and (max-width: 600px)": {
        height: "90vh"
    },
    "@media (min-width: 601px) and (max-width: 1024px)": {
        height: "108vh",
    },
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`;
const ImageContainer = styled.div`
  width: 55%;
  ${css`
    /* styles for mobile devices */
    @media (max-width: 768px) {
      width: 90%;
    }
  `}
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 6rem;
    text-align: center;
  }
`;

const HeroBanner: FunctionComponent = () => {
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
                    if (location.pathname !== "/#home") {
                        window.history.pushState(null, "", "/#home");
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
            <ContentWrapper>
                <ImageContainer>
                    <TextSVG/>
                </ImageContainer>
                <Title>
                    Nice to meet you! I'm Senior software engineer, expert in Python, AWS and ReactJS.
                </Title>
                <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/#contact"
                >
                    Get In Touch
                </Button>
            </ContentWrapper>
        </Container>
    );
};

export default HeroBanner;
