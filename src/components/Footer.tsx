import React, {FunctionComponent} from "react";
import styled, {css} from "styled-components";
import {Box, Link, Typography} from "@mui/material";

const FooterWrapper = styled.div`
  box-shadow: rgba(34, 34, 34, 0.1) 0px 0.125rem 0.3125rem;
  background: linear-gradient(45deg, rgb(34, 34, 34), rgb(42, 44, 46));
  padding: 20px 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  ${css`
    /* styles for mobile devices */
    @media (max-width: 1023px) {
      margin-bottom: 45px;
      flex-direction: column;
      align-items: flex-start;
    }
  `}
`;

const Footer: FunctionComponent = () => {
    return (
        <FooterWrapper>
            <Typography
                variant="h6"
                gutterBottom
                sx={{fontWeight: "bold", color: "secondary.main", margin: "0px"}}
            >
                Ismaeel Haider
            </Typography>
            <Box color="secondary.main">
                2023 Powered by:{" "}
                <Link
                    href="/"
                    underline="none"
                    sx={{
                        color: "secondary.main",
                        ":hover": {
                            color: "secondary.contrastText",
                        },
                    }}
                >
                    Ismaeel Haider
                </Link>
            </Box>
        </FooterWrapper>
    );
};

export default Footer;
