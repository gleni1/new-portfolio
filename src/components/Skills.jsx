import React from "react";
import { Window, WindowContent, ScrollView, WindowHeader, Table, TableHead, TableRow, TableHeadCell, TableBody, TableDataCell } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';


import original from 'react95/dist/themes/original';
import raspberry from 'react95/dist/themes/raspberry';
import matrix from 'react95/dist/themes/matrix';
import tokyoDark from 'react95/dist/themes/tokyoDark';

import gitImage from '../assets/git.png';
import photoshopImage from '../assets/photoshop.webp';
import figmaImage from '../assets/figma.png';
import dockerImage from '../assets/docker.webp';
import mongoImage from '../assets/mongo.png';
import pythonImage from '../assets/python.png';
import nodeImage from '../assets/node.webp';
import sqlImage from '../assets/sql.png';
import jsImage from '../assets/javascript.webp';
import goImage from '../assets/go.png';
import reactImage from '../assets/react.webp';

export const Skills = () => {
    return (
        <ThemeProvider theme={tokyoDark}>
             <Window className="w-[34vw]">
                <WindowHeader>Skills.exe</WindowHeader>
                <WindowContent>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell style={{ width: '40%' }}>Use</TableHeadCell>
                            <TableHeadCell style={{ width: '40%' }}>Name</TableHeadCell>
                            <TableHeadCell style={{ width: '20%' }}>Icon</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{textAlign: 'center'}}>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>Backend</TableDataCell>
                        <TableDataCell>Python</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={pythonImage} alt="" className="w-[18px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>Backend</TableDataCell>
                        <TableDataCell>Golang</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={goImage} alt="" className="w-[24px] ml-[-3px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>Backend</TableDataCell>
                        <TableDataCell>NodeJS</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={nodeImage} alt="" className="w-[24px] ml-[-3px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>Frontend</TableDataCell>
                        <TableDataCell>ReactJS</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={reactImage} alt="" className="w-[24px] ml-[-3px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>Frontend</TableDataCell>
                        <TableDataCell>Javascript</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={jsImage} alt="" className="w-[24px] ml-[-3px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>Database</TableDataCell>
                        <TableDataCell>SQL</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={sqlImage} alt="" className="w-[24px] ml-[-3px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>Database</TableDataCell>
                        <TableDataCell>MongoDB</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={mongoImage} alt="" className="w-[24px] ml-[-3px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>Containerization</TableDataCell>
                        <TableDataCell>Docker</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={dockerImage} alt="" className="w-[19px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>UI</TableDataCell>
                        <TableDataCell>Figma</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={figmaImage} alt="" className="w-[13px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>UI</TableDataCell>
                        <TableDataCell>Photoshop</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={photoshopImage} alt="" className="w-[15px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                        <TableRow>
                        <TableDataCell style={{ textAlign: 'center' }}>Version Ctrl</TableDataCell>
                        <TableDataCell>Git</TableDataCell>
                        <TableDataCell>
                            <span role='img' aria-label='lightning' className="flex justify-center">
                                <img src={gitImage} alt="" className="w-[15px]"/>
                            </span>
                        </TableDataCell>
                        </TableRow>

                    </TableBody>
                    </Table>
                </WindowContent>
            </Window>
        </ThemeProvider>
    )
}
