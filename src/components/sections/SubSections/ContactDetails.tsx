import React, {FunctionComponent} from "react";
import {EmailOutlined, PhoneOutlined} from "@mui/icons-material";
import {Typography, Box, Link} from "@mui/material";

const ContactDetails: FunctionComponent = () => {
    return (
        <>
            <Box>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{fontWeight: "bold", color: "secondary.main"}}
                >
                    Hey there! Got any cool stuff to share or just feeling like saying hi?
                </Typography>
                <p>
                    Don't hold back—drop me a
                    message and let's get this conversation rolling!
                </p>
            </Box>
            <Box sx={{display: "flex", marginTop: "10%"}}>
                <PhoneOutlined sx={{marginRight: "20px"}}/>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            color: "#fff",
                        }}
                    >
                        Phone:
                    </Typography>
                    <Link
                        href="tel:+923334242693"
                        underline="none"
                        sx={{
                            color: "#fff",
                            ":hover": {
                                color: "primary.main",
                            },
                        }}
                    >
                        (+92) 3334242693
                    </Link>
                </Box>
            </Box>
            <Box sx={{display: "flex", marginTop: "5%"}}>
                <EmailOutlined sx={{marginRight: "20px"}}/>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            color: "#fff",
                        }}
                    >
                        Email:
                    </Typography>

                    <Link
                        href="mailto:ismaeelhaider92@gmail.com"
                        underline="none"
                        sx={{
                            color: "#fff",
                            ":hover": {
                                color: "primary.main",
                            },
                        }}
                    >
                        ismaeelhaider92@gmail.com
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default ContactDetails;
