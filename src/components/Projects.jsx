import React from "react";
import { Window, WindowContent, ScrollView, Tooltip } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Button } from "react95";


import original from 'react95/dist/themes/original';
import raspberry from 'react95/dist/themes/raspberry';
import matrix from 'react95/dist/themes/matrix';
import fxDev from 'react95/dist/themes/fxDev';
import tokyoDark from 'react95/dist/themes/tokyoDark';

export const Projects = () => {
    return (
        <ThemeProvider theme={original}>
            <Window>
                <WindowContent>
                <ScrollView className="w-[40vw] h-[65vh]">
                    <div className="w-[38vw] mt-[1vh]">
                        <p className="text-xl font-bold">Trufit</p>
                        <div className="ml-2">
                            <p> Team Project (~150 hours)</p>
                            <p> From 09/2023 - 12/2023</p>
                            <p>
                                <div className="ml-5">
                                    • Fully functional fitness web application built using React.js, ExpressJS and MySQL, with 25+ features like coach filtering, request handling, and messaging. <br />
                                </div>
                                <Tooltip text='This takes you to the Github repo for the project!' enterDelay={1000} leaveDelay={1} className="ml-[12vh]">
                                    <Button onClick={() => window.open('https://github.com/gleni1/Fitness-Application', '_blank')} className="ml-[13vw] mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                                        See Project
                                    </Button>
                                </Tooltip>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="w-[38vw] mt-[1vh]">
                        <p className="text-xl font-bold">UPS ScanLife</p>
                        <div className="ml-2">
                            <p> Team Project (~60 hours)</p>
                            <p> From 01/2024 - 05/2024</p>
                            <p>
                                <div className="ml-5">
                                    • A web application built using ReactJS, ThreeJS and .NET with features like advanced filtering, pagination, and interactive 3D designs built to facilitate a specific task for UPS. <br />
                                </div>
                                <Tooltip text='This takes you to the Github repo for the project!' enterDelay={1000} leaveDelay={1} className="ml-[12vh]">
                                    <Button onClick={() => window.open('https://github.com/bbollard/UPSCapstoneSpring2024-UPSScanLifeLine', '_blank')} className="ml-[13vw] mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                                        See Project
                                    </Button>
                                </Tooltip>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="w-[38vw] mt-[1vh]">
                        <p className="text-xl font-bold">RSS Feed Aggregator</p>
                        <div className="ml-2">
                            <p> Personal Project (~15 hours)</p>
                            <p> From 09/2024 - 09/2024</p>
                            <p>
                                <div className="ml-5">
                                    • A CLI program written in Go that parses RSS feeds, stores data in PostgreSQL, and enables subscription management.
                                    Also has user authentication and efficient feed management using SQL with real-time updates via concurrent API calls <br />
                                </div>
                                <Tooltip text='This takes you to the Github repo for the project!' enterDelay={1000} leaveDelay={1} className="ml-[12vh]">
                                    <Button onClick={() => window.open('https://github.com/gleni1/blog-aggregator', '_blank')} className="ml-[13vw] mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                                        See Project
                                    </Button>
                                </Tooltip>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="w-[38vw] mt-[1vh]">
                        <p className="text-xl font-bold">Static Site Generator</p>
                        <div className="ml-2">
                            <p> Personal Project (~35 hours)</p>
                            <p> From 10/2024 - 10/2024</p>
                            <p>
                                <div className="ml-5">
                                    • A static site generator written in Python that takes raw content files (like Markdown and images) and turns them into a static website, creating a mix of HTML and CSS files ready for deployment. <br />
                                </div>
                                <Tooltip text='This takes you to the Github repo for the project!' enterDelay={1000} leaveDelay={1} className="ml-[12vh]">
                                    <Button onClick={() => window.open('https://github.com/gleni1/site_generator', '_blank')} className="ml-[13vw] mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                                        See Project
                                    </Button>
                                </Tooltip>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="w-[38vw] mt-[1vh]">
                        <p className="text-xl font-bold">CLI Git Contribution Graph</p>
                        <div className="ml-2">
                            <p> Personal Project (~15 hours)</p>
                            <p> From 10/2024 - 10/2024</p>
                            <p>
                                <div className="ml-5">
                                    • Go-based command-line tool that scans Git repositories in a specified folder, collects commit statistics 
                                    for a specified email, and generates a contribution graph for the last 6 months. The program generates a visual 
                                    output of the contributions made to the repositories, similar to the contribution graphs seen on GitHub profiles. <br />
                                </div>
                                <Tooltip text='This takes you to the Github repo for the project!' enterDelay={1000} leaveDelay={1} className="ml-[12vh]">
                                    <Button onClick={() => window.open('https://github.com/gleni1/git-graph', '_blank')} className="ml-[13vw] mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                                        See Project
                                    </Button>
                                </Tooltip>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="w-[38vw] mt-[1vh]">
                        <p className="text-xl font-bold">Library Management WebApp</p>
                        <div className="ml-2">
                            <p> Personal Project (~45 hours)</p>
                            <p> From 01/2023 - 03/2023</p>
                            <p>
                                <div className="ml-5">
                                    • This is an individual project I did for one of my college courses. It is a minimal library management website built using HTML, CSS, JS and PHP. <br />
                                </div>
                                <Tooltip text='This takes you to the Github repo for the project!' enterDelay={1000} leaveDelay={1} className="ml-[12vh]">
                                    <Button onClick={() => window.open('https://github.com/gleni1/Library-Application', '_blank')} className="ml-[13vw] mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                                        See Project
                                    </Button>
                                </Tooltip>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="w-[38vw] mt-[1vh]">
                        <p className="text-xl font-bold">Tiny Compiler</p>
                        <div className="ml-2">
                            <p> Personal Project (~10 hours)</p>
                            <p> From 12/2024 - 12/2024</p>
                            <p>
                                <div className="ml-5">
                                    • A lightweight, educational compiler written in Go, designed to help understand the basics of parsing and compiling a simplified programming language. <br />
                                </div>
                                <Tooltip text='This takes you to the Github repo for the project!' enterDelay={1000} leaveDelay={1} className="ml-[12vh]">
                                    <Button onClick={() => window.open('https://github.com/gleni1/tiny-compiler', '_blank')} className="ml-[13vw] mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                                        See Project
                                    </Button>
                                </Tooltip>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="w-[38vw] mt-[1vh]">
                        <p className="text-xl font-bold">There's More</p>
                        <div className="ml-2">
                            <p> Check out my Github profile to see all of my projects!</p>
                            <p>
                                <Tooltip text='This takes you my Github Profile!' enterDelay={1000} leaveDelay={1} className="ml-[12vh]">
                                    <Button onClick={() => window.open('https://github.com/gleni1', '_blank')} className="ml-[13vw] mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                                        See Profile
                                    </Button>
                                </Tooltip>
                            </p>
                        </div>
                    </div>
                    </ScrollView>
                </WindowContent>
            </Window>
        </ThemeProvider>
    )
}