import React, { FunctionComponent } from "react";
import { List, ListItem, ListItemText } from "@mui/material";

import styled, { css } from "styled-components";

import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import { Link } from "react-router-dom";

const listStyle = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "#222",
    transform: "translateY(-50%)",
    borderTopRightRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    paddingTop: 0,
    paddingBottom: 0,

    "& :nth-of-type(1)": {
        "&:hover": {
            borderTopRightRadius: "0.5rem",
        },
    },

    "& .MuiListItem-root:last-child": {
        "&:hover": {
            borderBottomRightRadius: "0.5rem",
        },
    },
    "@media (min-width: 200px) and (max-width: 768px)": {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        display: "flex",
        width: "100%",
        alignItems: "center",
        maxWidth: "inherit",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",

        "& :nth-of-type(1)": {
            "&:hover": {
                borderTopRightRadius: "0",
            },
        },
        "& :last-child": {
            "& .MuiListItem-root": {
                borderRight: "0px",
            },
        },

        "& .MuiListItem-root:last-child": {
            borderBottom: "0px",
            "&:hover": {
                borderBottomRightRadius: "0",
            },
        },
    },
};

const textStyle = {
    display: "none",
    "&:hover": {
        display: "block",
        "@media (min-width: 200px) and (max-width: 768px)": {
            display: "none",
        },
    },
};

const listItemWrap = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",

    minHeight: "73px",
    minWidth: "120px",

    "@media (min-width: 768px) and (max-width: 1023px)": {
        minHeight: "auto",
        minWidth: "auto",
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        borderBottom: "0px",
        padding: "16px 64px",
    },

    "@media (min-width: 401px) and (max-width: 767px)": {
        minHeight: "auto",
        minWidth: "auto",
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        borderBottom: "0px",
        padding: "16px 26px",
    },

    "@media (min-width: 200px) and (max-width: 400px)": {
        minHeight: "auto",
        minWidth: "auto",
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        borderBottom: "0px",
        padding: "16px 23px",
    },

    "&:hover": {
        backgroundColor: "#3340FF",
        "& .MuiListItemText-root": {
            display: "block",
            "@media (min-width: 200px) and (max-width: 1023px)": {
                display: "none",
            },
        },
    },
};

const MenuWrapper = styled.div`
  position: fixed;
  top: 50%;
  z-index: 9999;

  ${css`
    /* styles for mobile devices */
    @media (max-width: 768px) {
      top: 97%;
      bottom: 0;
      width: 100%;
    }
  `}

  ${css`
    /* styles for tablets */
    @media (min-width: 768px) and (max-width: 1023px) {
      /* your tablet styles here */
    }
  `}
`;

const LinkWrapper = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const iconWrap = {
    "@media (min-width: 200px) and (max-width: 320px)": {
        fontSize: "1rem",
    },
};

const Menu: FunctionComponent = () => {
    return (
        <MenuWrapper>
            <List sx={listStyle} component="nav" aria-label="LeftMenu">
                <LinkWrapper to="/#home">
                    <ListItem sx={listItemWrap}>
                        <ListItemText primary="Home" sx={textStyle} />
                        <CottageOutlinedIcon sx={iconWrap} />
                    </ListItem>
                </LinkWrapper>
                {/* <Divider /> */}
                <LinkWrapper to="/#about">
                    <ListItem sx={listItemWrap}>
                        <ListItemText primary="About" sx={textStyle} />
                        <AccountCircleIcon sx={iconWrap} />
                    </ListItem>
                </LinkWrapper>
                <LinkWrapper to="/#skills">
                    <ListItem sx={listItemWrap}>
                        <ListItemText primary="Skills" sx={textStyle} />
                        <PsychologyIcon sx={iconWrap} />
                    </ListItem>
                </LinkWrapper>
                {/* <Divider light /> */}
                <LinkWrapper to="/#experience">
                    <ListItem sx={listItemWrap}>
                        <ListItemText primary="Experience" sx={textStyle} />
                        <ManageAccountsIcon sx={iconWrap} />
                    </ListItem>
                </LinkWrapper>
                {/* <Divider light /> */}
                <LinkWrapper to="/#contact">
                    <ListItem sx={listItemWrap}>
                        <ListItemText primary="Contact" sx={textStyle} />
                        <ContactMailIcon sx={iconWrap} />
                    </ListItem>
                </LinkWrapper>
            </List>
        </MenuWrapper>
    );
};

export default Menu;
