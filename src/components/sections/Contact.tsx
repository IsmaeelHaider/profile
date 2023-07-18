import React, {FunctionComponent, useRef} from "react";
import styled from "styled-components";
import {Container} from "@mui/material";
import ContactDetails from "./SubSections/ContactDetails";

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
