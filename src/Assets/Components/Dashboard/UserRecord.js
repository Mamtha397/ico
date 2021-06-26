import React from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import classes from './UserRecord.module.css';
import Date from '../../UI/Date';
import UserRecordList from './UserRecordList';

const UserRecord = (props)=>{
    return (
        <Card className={classes.userRecord_card}>
            <Date className={classes.date} date={props.date}></Date>
            <p className={classes.userName}>{props.userName}</p>
            <Card className={classes.amount}>
                <p>{`$${props.amount}`}</p>
            </Card>
        </Card>
    );
}

export default UserRecord;