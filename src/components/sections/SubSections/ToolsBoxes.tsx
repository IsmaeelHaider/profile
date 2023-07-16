import React, {FunctionComponent} from "react";
import {Box} from "@mui/material";
import ToolsAndSkillsBox from "./ToolsAndSkillsBox";
import pycharm from "../../../assets/skills/pycharm.png";
import webstorm from "../../../assets/skills/webstorm.png";
import gitkraken from "../../../assets/skills/gitkraken.png";
import vscode from "../../../assets/skills/vscode.png";
import postgress from "../../../assets/skills/postgresql.png";
import github from "../../../assets/skills/github.png";
import influxdb from "../../../assets/skills/influxdb.png";
import mongodb from "../../../assets/skills/mongo.png";
import lambda from "../../../assets/skills/lambda.png";
import redshift from "../../../assets/skills/redshift.png";


const ToolsBoxes: FunctionComponent = () => {
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
            <ToolsAndSkillsBox icon={pycharm} help={"PyCharm"}/>
            <ToolsAndSkillsBox icon={webstorm} help={"WebStorm"}/>
            <ToolsAndSkillsBox icon={gitkraken} help={"GitKraken"}/>
            <ToolsAndSkillsBox icon={vscode} help={"Visual Studio Code"}/>
            <ToolsAndSkillsBox icon={postgress} help={"Postgres"}/>
            <ToolsAndSkillsBox icon={github} help={"GitHub"}/>
            <ToolsAndSkillsBox icon={influxdb} help={"InfluxDB"}/>
            <ToolsAndSkillsBox icon={mongodb} help={"MongoDB"}/>
            <ToolsAndSkillsBox icon={lambda} help={"AWS Lambda Functions"}/>
            <ToolsAndSkillsBox icon={redshift} help={"AWS Redshift"}/>

        </Box>
    );
};

export default ToolsBoxes;
