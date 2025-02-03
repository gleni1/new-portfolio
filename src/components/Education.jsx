import React from "react";
import { Window, WindowContent, ScrollView } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';


import original from 'react95/dist/themes/original';
import raspberry from 'react95/dist/themes/raspberry';
import matrix from 'react95/dist/themes/matrix';
import fxDev from 'react95/dist/themes/fxDev';

export const Education = () => {
    return (
        <ThemeProvider theme={original}>
            <Window>
                <WindowContent>
                <ScrollView className="w-[40vw] h-[65vh]">
                    <div className="w-[39vw] mt-[1vh]">
                        <p className="text-xl font-bold">New Jersey Institute of Technology (Graduated)</p>
                        <div className="ml-7">
                            <p> Level: Bachelor of Science</p>
                            <p> Discipline: Computer Science</p>
                            <p> From 01/2022 - 05/2024</p>
                            <p>
                                Relevant Coursework: <br />
                                <div className="ml-5">
                                    • Advanced Data Structures and Algorithms <br />
                                    • Intensive Programming in Linux <br />
                                    • Cryptography <br />
                                    • Data Science <br />
                                    • Intro to Cybersecurity <br />
                                    • Artificial Intelligence <br />
                                </div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div classname="w-[28vw]">
                        <p className="text-xl font-bold">Bergen Community College (Graduated)</p>
                        <div className="ml-7">
                            <p> Level: Associate of Science</p>
                            <p> Discipline: Computer Science</p>
                            <p> From 09/2022 - 12/2021</p>
                            <p>
                                Relevant Coursework: <br />
                                <div className="ml-5">
                                    • Web Development <br />
                                    • Programming in C++ <br />
                                    • Database Design and Management <br />
                                    • Calculus III <br />
                                    • Discrete Mathematics <br />
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