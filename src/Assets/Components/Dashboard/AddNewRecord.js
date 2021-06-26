import React from 'react';
import Card from '../../UI/Card';
import classes from './AddNewRecord.module.css';
import Button from '../../UI/Button';

const AddNewRecord = (props)=>{
    return(
        <Card className={classes.addNewRecord_card}>
            <Button onClick={props.onClick}>ADD NEW RECORD</Button>
        </Card>
    );
}

export default AddNewRecord;