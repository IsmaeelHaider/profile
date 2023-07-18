import React, {FunctionComponent, useRef} from "react";
import styled, {css} from "styled-components";
import Container from "@mui/material/Container";
import {ReactComponent as TextSVG} from "../../assets/heroBanner/eng.svg";
import Button from "@mui/material/Button";
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

    return (
        <Container sx={ContainerWrapperClass} ref={containerRef}>
            <ContentWrapper>
                <ImageContainer>
                    <TextSVG/>
                </ImageContainer>
                <Title>
                    Nice to meet you! I'm Senior Software Engineer, proficient in Python, AWS and ReactJS.
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
