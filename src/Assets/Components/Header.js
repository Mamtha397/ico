import React from 'react';
import classes from './Header.module.css';
import MainMenu from './MainMenu';

const Header = (props)=>{
    return(
        <div className={classes.header}>
            <h1>ICO</h1>
            {props.isLoggedIn && <MainMenu onLogoutClicked={props.onLogoutClicked}></MainMenu>}
        </div>
    );
}

export default Header;