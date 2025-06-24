import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css'
import InterestFreeDays from './InterestFreeDays'

const theme = createTheme({
  typography: { fontFamily: 'intro-cond-regular' },
  palette: {
    primary: { main: '#005aa0' },
    secondary: { main: '#ffffff' },
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <InterestFreeDays />
    </ThemeProvider>
  </StrictMode>,
)
