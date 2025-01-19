import React, { useState } from 'react';
import { MenuList, MenuListItem, Separator, styleReset, Handle } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

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

export const Sidebar = () => {
  // Use `useLocation` to handle active state based on the URL
  const location = useLocation();

  // Define menu items with corresponding routes
  const menuItems = [
    { label: '🧑‍💻 Me', path: '/' },
    { label: '👨‍🏫 Education', path: '/education' },
    { label: '💻 Experience', path: '/experience' },
    { label: '👾 Projects', path: '/projects' },
    { label: '💪 Skills', path: '/skills' },
    { label: '📧 Contact', path: '/contact' },
  ];

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <MenuList inline>
          {menuItems.map((item) => (
            <MenuListItem
              key={item.path}
              style={{
                backgroundColor: location.pathname === item.path ? '#005fbf' : 'transparent',
                color: location.pathname === item.path ? '#fff' : 'inherit',
              }}
            >
              <Link
                to={item.path}
                style={{
                  textDecoration: 'none',
                  color: location.pathname === item.path ? '#fff' : 'inherit',
                }}
              >
                {item.label}
              </Link>
            </MenuListItem>
          ))}
        </MenuList>
      </ThemeProvider>
    </div>
  );
};
