import React from "react";
import { Window, WindowContent, ScrollView, ProgressBar } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState, useEffect } from "react";


import original from 'react95/dist/themes/original';
import raspberry from 'react95/dist/themes/raspberry';
import matrix from 'react95/dist/themes/matrix';
import travel from 'react95/dist/themes/travel';
import spruce from 'react95/dist/themes/spruce';
import fxDev from 'react95/dist/themes/fxDev';

export const Progressbar = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setPercent(previousPercent => {
            if (previousPercent === 100) {
            return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(previousPercent + diff, 100);
        });
        }, 2000);
        return () => {
        clearInterval(timer);
        };
    }, []);

    return (
        <ThemeProvider theme={spruce}>
            <ProgressBar variant='tile' value={Math.floor(percent)} />
        </ThemeProvider>
    )
    ;
}