import React, {useEffect, useRef, FunctionComponent} from 'react';
import {useLocation} from "react-router-dom";
import './css/App.css';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Layout from "./layout/Layout";
import HeroBanner from "./components/sections/HeroBanner";
import "./css/App.css";
import {CssBaseline} from "@mui/material";
import Cards from "./components/Cards";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

// const defaultTheme = createTheme({
//     palette: {
//         mode: "dark",
//         primary: {
//             main: "#1C1F24", // Background1
//             dark: "#24282F"  // Background2
//         },
//         secondary: {
//             main: "#FFFFFF", // Text
//             contrastText: "#2363DC", // Buttons
//             dark: "#606D81" // Separator
//
//         },
//     },
// });

const defaultTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#3340FF",
        },
        secondary: {
            main: "#FFFFFF",
        },
    },
});

const App: FunctionComponent = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const expRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const location = useLocation();

    useEffect(() => {
        const {hash} = location;
        const targetRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
            "#home": homeRef,
            "#about": aboutRef,
            "#skills": skillsRef,
            "#experience": expRef,
            "#contact": contactRef
        };

        const targetRef = targetRefs[hash];
        if (targetRef?.current) {
            targetRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "end",
            });
        }
    }, [location]);
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <Layout>

                <section id="home" ref={homeRef}>
                    <HeroBanner/>
                </section>

                <Cards/>

                <section id="about" ref={aboutRef}>
                    <About/>
                </section>

                <section id="skills" ref={skillsRef}>
                    <Skills/>
                </section>

                <section id="experience" ref={expRef}>
                    <Experience/>
                </section>

                <section id="contact" ref={contactRef}>
                    <Contact/>
                </section>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
