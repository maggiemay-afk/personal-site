import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const ButtonAppBar = () => {
    return (
        <div className="buttonGroupHeader">     
          <ButtonGroup 
              sx={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }} 
              variant="contained" 
              size="large" 
              aria-label="large button group"
              className='buttonGroup'
          >
              <Button className='pageButton' href="/">Home</Button>
              <Button className='pageButton' href="/about">About</Button>
              <Button className='pageButton' href="/education">Education</Button>
              <Button className='pageButton' href="/resume">Resume</Button>
              <Button className='pageButton' href="/projects">Projects</Button>
          </ButtonGroup> 
        </div>
      );
  };

  export default ButtonAppBar;