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
                <ScrollView className="w-[40vw] h-[65vh]">
                    <div className="w-[38vw] mt-[1vh]">
                        <p className="text-xl font-bold">Freelancer</p>
                        <div className="ml-2">
                            <p> Role: Web Developer</p>
                            <p> From 05/2024 - Current</p>
                            <p>
                                Tasks: <br />
                                <div className="ml-5">
                                    • Designed and developed custom full-stack websites for clients, focusing on responsive landing pages and dynamic web applications using ReactJS, Next.js, and Node.js/Express. <br />
                                    • Integrated backend solutions, including authentication, payment processing, and database management, ensuring secure and scalable applications and reducing client workload by 40% through automation. <br />
                                    • Optimized website performance and SEO, improving page load speeds and search engine visibility, improving organic traffic by up to 50% and reducing page load times by 35%. <br />
                                </div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="w-[38vw] mt-[1vh]">
                        <p className="text-xl font-bold">UPS</p>
                        <div className="ml-2">
                            <p> Role: Software Engineering Intern</p>
                            <p> From 01/2022 - 05/2022</p>
                            <p>
                                Tasks: <br />
                                <div className="ml-5">
                                    • Collaborated in the development of a web application’s front end, utilizing ReactJS for the core framework, ThreeJS for interactive 3D designs, and MaterialUI for advanced styling and aesthetics improving user interface efficiency by 25%. <br />
                                    • Enhanced site responsiveness and efficiency by implementing key features such as advanced filtering, pagination, and interactive pop-ups, resulting in a 30% improvement in user engagement and a 20% boost in site performance. <br />
                                    • Developed comprehensive unit testing for the front end using Jest, alongside automation scripts in Python with Selenium to simulate user interactions and ensure reliable site functionality. <br />
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="w-[38vw] mt-[1vh]">
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
                    <div className="w-[38vw] mt-[1vh]">
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
                    <div className="w-[38vw] mt-[1vh]">
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