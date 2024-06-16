import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { 
    buttonGroup,
    header,
    hamburgerMenu
  } from './layout.module.css';


const ButtonAppBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.currentTarget);};
    const handleClose = () => { setAnchorEl(null); };

    return (
        <div className={header}>
            <div className={buttonGroup}>
                <ButtonGroup 
                    sx={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }} 
                    variant="contained" 
                    size="large" 
                    aria-label="large button group"  
                >
                    <Button href="/">Home</Button>
                    <Button href="/about">About</Button>
                    <Button href="/education">Education</Button>
                    <Button href="/projects">Projects</Button>
                </ButtonGroup>             
            </div>     

            <div className={hamburgerMenu}>
                <IconButton
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    aria-label='menu'
                    size="large"
                >
                    <MenuIcon style={{fontSize:'4rem'}}></MenuIcon>
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem><Button href="/">Home</Button></MenuItem>
                    <MenuItem><Button href="/about">About</Button></MenuItem>
                    <MenuItem><Button href="/education">Education</Button></MenuItem>
                    <MenuItem><Button href="/projects">Projects</Button></MenuItem>
                </Menu>
            </div>
        </div>
    );
  };
  export default ButtonAppBar;