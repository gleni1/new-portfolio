import React from "react";
import { Window, WindowContent, ScrollView, WindowHeader, Tabs, Tab, TabBody, GroupBox, NumberInput, Checkbox } from 'react95';
import { Button } from "react95";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from "react";


import original from 'react95/dist/themes/original';
import raspberry from 'react95/dist/themes/raspberry';
import matrix from 'react95/dist/themes/matrix';
import fxDev from 'react95/dist/themes/fxDev';
import tokyoDark from 'react95/dist/themes/tokyoDark';

export const Contact = () => {
    const [state, setState] = useState({
      activeTab: 0
    });

    const handleChange = (value, event) => {
      console.log({ value, event });
      setState({ activeTab: value });
    };
  
    const { activeTab } = state;
    return (
      <ThemeProvider theme={tokyoDark}>
        <Window style={{ width: 350 }}>
          <WindowHeader>contact.exe</WindowHeader>
          <WindowContent>
            <Tabs value={activeTab} onChange={handleChange}>
              <Tab value={0}>Email</Tab>
              <Tab value={1}>GitHub</Tab>
              <Tab value={2}>Linkedin</Tab>
            </Tabs>
            <TabBody style={{ height: 300 }}>
              {activeTab === 0 && (
                <div>
                  <GroupBox label='Contact:'>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Email Address:</div>
                    <p>glenipoleshi@gmail.com</p>
                    <Button onClick={() => window.location.href = 'mailto:glenipoleshi@gmail.com?subject=Subject&body=Body'}  className="mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                        Email me
                    </Button>
                  </GroupBox>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <GroupBox label='Contact:'>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Github Account:</div>
                    <p>github.com/gleni1</p>
                    <Button onClick={() => window.open('https://github.com/gleni1', '_blank')}  className="mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                        Check out my Github
                    </Button>
                  </GroupBox>
               </div>
              )}
              {activeTab === 2 && (
                <div>
                <GroupBox label='Contact:'>
                  <div style={{ padding: '0.5em 0 0.5em 0' }}>Github Account:</div>
                  <p>linkedin.com/mariglen</p>
                  <Button onClick={() => window.open('https://www.linkedin.com/in/mariglen-poleshi-46356a1a3/', '_blank')}  className="mt-[2vh] bg-blue-500 text-white hover:bg-blue-700">
                      Let's Connect
                  </Button>
                </GroupBox>
             </div>
              )}
            </TabBody>
          </WindowContent>
        </Window>
      </ThemeProvider>
    );
}