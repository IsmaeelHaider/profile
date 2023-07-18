import React, {FunctionComponent} from "react";
import {Stack, Container} from "@mui/material";
import AchievementCard from "./sections/SubSections/AchievementCards"

const containerWrapper = {
    paddingBottom: "40px",
    display: "flex",
    justifyContent: "center",
};

const stackWrapper = {
    "@media (max-width: 1023px)": {
        flexDirection: "column",
        alignItems: "center"
    },
};

const Cards: FunctionComponent = () => {
    const containerRef = React.useRef(null);

    return (
        <Container sx={containerWrapper}>
            <Stack spacing={2} direction="row" sx={stackWrapper} ref={containerRef}>
                <AchievementCard title={"7+"} subTitle={"Years of experience"} image={"experience"}/>
                <AchievementCard title={"10+"} subTitle={"Successful projects"} image={"projects"}/>
                <AchievementCard title={"3"} subTitle={"Performance awards"} image={"achievements"}/>
            </Stack>
        </Container>
    );
};

export default Cards;
