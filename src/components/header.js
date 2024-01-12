import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      blue: {
        main: '#112D32',
        light: '#88bdbc',
        dark: '#88bdbc',
        contrastText: '#ffffff',
      },
    },
  });

const ButtonAppBar = () => {
    return (
        <div className="buttonGroupHeader">     
            <ThemeProvider theme={theme}>
                <ButtonGroup 
                    sx={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }} 
                    variant="contained" 
                    size="large" 
                    aria-label="large button group"
                    className='buttonGroup'
                >
                    <Button className='pageButton' href="/" color="blue">Home</Button>
                    <Button className='pageButton' href="/about" color="blue">About</Button>
                    <Button className='pageButton' href="/education" color="blue">Education</Button>
                    <Button className='pageButton' href="/resume" color="blue">Resume</Button>
                    <Button className='pageButton' href="/projects" color="blue">Projects</Button>
                </ButtonGroup> 
            </ThemeProvider>
        </div>
      );
  };

  export default ButtonAppBar;