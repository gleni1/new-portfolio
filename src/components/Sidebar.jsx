import React from 'react';
import { MenuList, MenuListItem, Separator, styleReset, Handle } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';
import matrix from 'react95/dist/themes/matrix';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

export const Sidebar = () => (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
      <MenuList inline>
        {/* <MenuListItem square disabled>
          <span role='img' aria-label='🌿'>
            🌿
          </span>
        </MenuListItem> */}
        {/* <Handle size={38} /> */}
        <MenuListItem>
            <Link to="/education">👨‍🏫 Education</Link>
        </MenuListItem>
        <MenuListItem>
            <Link to="/experience">💻 Experience</Link>
        </MenuListItem>
        <MenuListItem>
            <Link to="/projects">👾 Projects</Link>
        </MenuListItem>
        <MenuListItem>
            <Link to="/skills">💪 Skills</Link>
        </MenuListItem>
        <MenuListItem>
            <Link to="/contact">📧 Contact</Link>
        </MenuListItem>
      </MenuList>
      </ThemeProvider>
    </div>
);