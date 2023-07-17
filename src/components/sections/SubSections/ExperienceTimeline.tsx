import React, {FunctionComponent} from "react";

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from "@mui/lab";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import {Typography} from "@mui/material";

const ExperienceTimeline: FunctionComponent = () => {
    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}
        >
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>

                <TimelineContent>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        CryptoFi
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Development Lead
                    </Typography>
                    <p>
                        I successfully led an 11-person team for integrating cryptocurrency trading into the traditional
                        banking sector. This innovation provided financial institutions with a new way to attract and
                        retain users while expanding their services. The project involved designing and implementing
                        REST APIs powered by AWS API Gateway and Lambda for user authentication, trade viewing, and
                        cryptocurrency balance tracking. We utilized Lambda-based authorizers and DynamoDB for data
                        storage, and AWS CDK for scalable infrastructure. To ensure data integrity, we employed QLDB for
                        ledger maintenance and OpenSearch for user access. Our robust system, built with various
                        technologies such as AWS SQS, Python, serverless architecture, ElasticSearch, Flask, NoSQL,
                        DataEngineer, Git, ETL, SQL, EC2, and Redis, met the unique needs of our clients. The successful
                        outcome of this project established financial institutions as secure and insured platforms for
                        cryptocurrency investment, expanding their service offerings and solidifying their position as
                        preferred choices in the industry. This achievement has the potential to shape the future of
                        finance, and our team takes pride in our contribution.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Neustreet (Strategic Systems International)
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Development Lead
                    </Typography>
                    <p>
                        The project involved designing and implementing a searchable knowledge base for collectibles,
                        including NFTs, sneakers, and Pokemon cards. Data was collected from various sources using
                        scrappers and crawlers, and stored in an S3 bucket. Multiple ETL jobs were designed and
                        implemented to transform the raw data into a processed format in another S3 bucket. The
                        processed data was then loaded into Elasticsearch for efficient search and analysis. The project
                        was orchestrated using Apache Airflow, providing a flexible and scalable workflow management
                        system. Technologies utilized included AWS Lambda, MongoDB, Fast API, Python, Git, Flask, EC2,
                        Elasticsearch, and NoSQL databases.

                        The project aimed to create a valuable resource for collectors and enthusiasts, offering them
                        comprehensive information to make informed decisions about their collections and purchases. It
                        showcased expertise in data engineering, web development, and cloud services, demonstrating the
                        ability to design and implement complex data pipelines using a variety of technologies and
                        tools.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Advance Energy (Strategic Systems International)
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Senior Software Engineer
                    </Typography>
                    <p>
                        I contributed to the development of a REST API-based algorithm engine specifically designed for
                        fatigue analysis and time-series forecasting of capacitors. My responsibilities included
                        creating the REST API and deploying the code using Gitlab CI/CD while containerizing the
                        application with Docker. To optimize the application's performance on embedded systems, I
                        applied my skills in Data Engineering to write efficient code. Additionally, I integrated
                        Grafana with InfluxDB and Rabbit MQ to visualize real-time outputs from the algorithm engine on
                        dynamic dashboards. The project leveraged a range of technologies, including Flask, Grafana,
                        InfluxDB, Rabbit MQ, Python, Docker, NoSQL, Git, and ETL. The resulting outcome is a robust and
                        scalable solution that provides accurate fatigue analysis and time-series forecasting for
                        capacitors, with the ability to monitor system performance through real-time dashboards.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Speaker Diarization (Cyberspace Global)
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Sr. Full Stack Developer
                    </Typography>
                    <p>
                        I successfully led the creation of a groundbreaking application that transformed the process of
                        taking meeting minutes. The project involved designing and developing a speaker diarization
                        application that utilized text-to-speech technology to generate meeting minutes automatically.
                        Leading a team, we developed a unique algorithm powered by machine learning, training the
                        application to recognize and transcribe voices based on user input. Cutting-edge technologies,
                        including React JS, Django, Celery, and Google Text to Speech, were employed to build a robust
                        and reliable application that effectively served its purpose.

                        The outcome of the project was the successful development of an innovative speaker diarization
                        application. This application revolutionized the way meeting minutes are generated by automating
                        the process. Users could simply initiate a meeting and place their laptops in the room, allowing
                        the application to capture and record the entire meeting. This streamlined approach saved time
                        and reduced errors associated with manual minute-taking. The resulting application was
                        user-friendly and offered clients an efficient and convenient solution for recording their
                        meetings.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Fleet Management (Cyberspace Global)
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Senior Software Engineer
                    </Typography>
                    <p>
                        I contributed to the development of an innovative application that automates fleet management
                        and optimizes travel routes for school buses and carpooling. By integrating cutting-edge
                        technologies such as MongoDB, Flask API, Celery, and Python, I helped design and build a robust
                        and scalable system. This application streamlined route planning, reducing time and effort while
                        ensuring efficient and cost-effective transportation services. Real-time vehicle tracking
                        capabilities enhanced fleet monitoring and management. The project resulted in improved
                        transportation services, including reduced costs, increased fuel efficiency, and improved
                        customer satisfaction. Overall, the successful deployment of this application brought
                        significant benefits to the company and its customers, enhancing revenue and overall
                        transportation experiences.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    2017
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Vortex (Zameen.com)
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        Data Engineer
                    </Typography>
                    <p>
                        I designed and implemented a REST API stat engine named "Vortex" that captures and stores user
                        interactions on a website in a data lake using a star schema. A reporting engine based on
                        MongoDB was built to analyze and display user behavior data. To visualize the data, I connected
                        MongoDB with d3.js. The project involved utilizing technologies like Flask, Redis, Celery,
                        MongoDB, d3.js, Python, Data Engineering, and Information Technology. Collaborating closely with
                        the project team, I ensured that the system implementation met the project requirements.
                        Responsibilities included designing the system architecture, developing and testing the code,
                        and providing technical support.

                        The project's outcome is an improved tracking and analysis of user behavior on the website,
                        enabling the business to make data-driven decisions and enhance the user experience. The
                        implementation of the "Vortex" stat engine and data storage in a data lake with a star schema
                        provide a reliable and scalable solution. This project also allowed me to develop skills in data
                        engineering, information technology, and full-stack development.
                    </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    2015
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        iOS Developer (Esource24)
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{fontWeight: "bold", color: "secondary.main"}}
                    >
                        iOS Developer
                    </Typography>
                    <p>
                        Created 2 iOS applications. One was to diagnose network issues and the other was computer vision
                        based. That use to suggest users which colors of makeup to use with your attire.
                    </p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default ExperienceTimeline;
