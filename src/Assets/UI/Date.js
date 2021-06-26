import React from 'react';
import Card from './Card';
import classes from './Date.module.css';

const Date = (props)=>{
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();
    return(
        <Card className={`${classes.date_card} ${props.className}`}>
            <p className={classes.month}>{month}</p>
            <p className={classes.day}>{day}
            <sup>th</sup></p>
            <p className={classes.year}>{year}</p>
        </Card>
    );
}

export default Date;