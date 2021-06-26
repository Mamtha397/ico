import React from 'react';
import Button from '../UI/Button';
import classes from './MainMenu.module.css';

const MainMenu = (props)=>{
    return(
        <Button className={classes.logoutButton} onClick={props.onLogoutClicked}>Logout</Button>
    );
}

export default MainMenu;