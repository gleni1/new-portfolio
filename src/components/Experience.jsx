import React from "react";
import { Window, WindowContent, ScrollView } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';


import original from 'react95/dist/themes/original';
import raspberry from 'react95/dist/themes/raspberry';
import matrix from 'react95/dist/themes/matrix';
import fxDev from 'react95/dist/themes/fxDev';

export const Experience = () => {
    return (
        <ThemeProvider theme={original}>
            <Window>
                <WindowContent>
                    <ScrollView className="w-[36vw] h-[60vh]">
                    <div className="w-[32vw]">
                        <p className="text-xl font-bold">Engineering Group</p>
                        <div className="ml-2">
                            <p> Role: Software Engineering Intern</p>
                            <p> From 06/2023 - 08/2023</p>
                            <p>
                                Tasks: <br />
                                <div className="ml-5">
                                    • Designed and implemented full-stack features using ReactJS and Node.js/Express, including a real-time notification system and dashboard analytics that increased user engagement by 20% and reduced data loading times by 15%. <br />
                                    • Developed RESTful APIs and middleware services to handle complex data processing and authentication, while optimizing database queries to improve overall application performance and scalability. <br />
                                    • Developed automated testing infrastructure combining Jest for frontend unit tests and Python scripts for end-to-end integration testing, achieving 90% code coverage <br />
                                </div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="w-[32vw]">
                        <p className="text-xl font-bold">OT Consulting</p>
                        <div className="ml-2">
                            <p> Role: Software Engineering Intern</p>
                            <p> From 06/2022 - 08/2022</p>
                            <p>
                                Tasks: <br />
                                <div className="ml-5">
                                    • Developed Python scripts utilizing pandas and numpy to automate data extraction from unstructured documents, reducing manual processing time by 40% and drastically improving data accuracy rates. <br />
                                    • Created visualization tools with matplotlib to analyze and present document classification results, enabling stakeholders to better understand extraction patterns and optimize workflows. <br />
                                    • Collaborated with the data science team to implement reusable data preprocessing functions that standardized document classification across client projects, increasing team efficiency by 15%. <br />
                                </div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="w-[32vw]">
                        <p className="text-xl font-bold">International Youth Organization</p>
                        <div className="ml-2">
                            <p> Role: Software Engineering Intern</p>
                            <p> From 01/2022 - 05/2022</p>
                            <p>
                                Tasks: <br />
                                <div className="ml-5">
                                    • Led the UX design process for a mobile application, creating wireframes in Figma and implementing responsive layouts that streamlined core functionalities like user registration, profile management, and activity tracking. <br />
                                    • Supported backend development by implementing Node.js APIs for user authentication and profile management, working with MongoDB to handle data persistence and retrieval operations. <br />
                                </div>
                            </p>
                        </div>
                    </div>
                    </ScrollView>
                </WindowContent>
            </Window>
        </ThemeProvider>
    )
}