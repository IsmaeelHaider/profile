import React, {FunctionComponent} from "react";
import {Box} from "@mui/material";
import ToolsAndSkillsBox from "./ToolsAndSkillsBox";

import html5 from "../../../assets/skills/html5.png"
import python from "../../../assets/skills/python.png"
import flask from "../../../assets/skills/flask.png"
import django from "../../../assets/skills/django.png"
import fastAPI from "../../../assets/skills/fastapi.png"
import aws from "../../../assets/skills/aws.png"
import docker from "../../../assets/skills/docker.png"
import elasticsearch from "../../../assets/skills/elasticsearch.png"
import react from "../../../assets/skills/react.png"
import javascript from "../../../assets/skills/javascript.png"
import typescript from "../../../assets/skills/typescript.png"
import git from "../../../assets/skills/git.png"
import serverless from "../../../assets/skills/serverless.png"
import sql from "../../../assets/skills/mysql.png"
import MLAI from "../../../assets/skills/MLAI.png"
import dataengineering from "../../../assets/skills/dataengineering.png"
import nosql from "../../../assets/skills/nosql.png"
const SkillsBoxes: FunctionComponent = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "@media (min-width: 200px) and (max-width: 1023px)": {
                    justifyContent: "center",
                },
            }}
        >
            <ToolsAndSkillsBox icon={python} help={"python"}/>
            <ToolsAndSkillsBox icon={flask} help={"flask"}/>
            <ToolsAndSkillsBox icon={django} help={"django"}/>
            <ToolsAndSkillsBox icon={fastAPI} help={"FastAPI"}/>
            <ToolsAndSkillsBox icon={aws} help={"AWS"}/>
            <ToolsAndSkillsBox icon={MLAI} help={"ML/AI"}/>
            <ToolsAndSkillsBox icon={dataengineering} help={"Data Engineering"}/>
            <ToolsAndSkillsBox icon={docker} help={"Docker"}/>
            <ToolsAndSkillsBox icon={elasticsearch} help={"Elasticsearch"}/>
            <ToolsAndSkillsBox icon={react} help={"React"}/>
            <ToolsAndSkillsBox icon={javascript} help={"javascript"}/>
            <ToolsAndSkillsBox icon={typescript} help={"typescript"}/>
            <ToolsAndSkillsBox icon={git} help={"git"}/>
            <ToolsAndSkillsBox icon={serverless} help={"serverless"}/>
            <ToolsAndSkillsBox icon={sql} help={"sql"}/>
            <ToolsAndSkillsBox icon={nosql} help={"nosql"}/>
            <ToolsAndSkillsBox icon={html5} help={"HTML5"}/>



        </Box>
    );
};

export default SkillsBoxes;
