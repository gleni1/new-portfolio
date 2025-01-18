import React from "react";
import { Window, WindowContent, ScrollView } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Progressbar } from "./ProgressBar";


import original from 'react95/dist/themes/original';
import raspberry from 'react95/dist/themes/raspberry';
import matrix from 'react95/dist/themes/matrix';
import fxDev from 'react95/dist/themes/fxDev';

export const AboutMe = () => {
    return (
        <ThemeProvider theme={matrix}>
            <Window>
                <WindowContent>
                    <ScrollView className="w-[36vw] h-[60vh]">
                    <div className="w-[35vw] mt-[1vh]">
                        <p className="text-xl font-bold">$ whoami</p>
                        <br />
                        <div className="ml-7">
                            <p> Hello there, my name is Mariglen Poleshi.</p> <br />
                            <p> I am a full-stack Software Engineer, passionate about building innovative and 
                                efficient solutions that solve real-world problems. With a strong foundation in 
                                both backend and frontend technologies, I strive to create seamless, user-centered 
                                applications. I'm always eager to explore new technologies and grow as a developer.</p> <br />
                            <p>
                            <p>
                                My journey as a developer has led me to work on diverse projects, ranging from developing
                                web applications with React and Go to building tools for data analysis and automation.
                                I enjoy challenges that push me to think creatively and solve complex problems, especially 
                                when using technologies like Python, SQL, and cloud platforms.
                            </p>
                            </p>
                        </div>
                    </div>
                    <div className="mt-[7vh] ml-[5vh] w-[85%]">
                        <Progressbar />
                    </div>
                    </ScrollView>
                </WindowContent>
            </Window>
        </ThemeProvider>
    )
}