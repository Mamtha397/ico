import React from 'react';
import Card from '../../UI/Card';
import UserRecord from './UserRecord';
import classes from './UserRecordList.module.css';

const UserRecordList = (props)=>{

    if(props.items.length===0){
        return (<h2>No Record Found</h2>);
    }

    return(
        <div className={classes.userRecordList_card}>
            {
                props.items.map((user,id)=>{
                    return <UserRecord 
                    key={id}
                    userName={user.userName} amount={user.amount} 
                    date={user.date}></UserRecord>
                })
            }
        </div>
    );
}

export default UserRecordList;