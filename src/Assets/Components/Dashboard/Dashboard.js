import React ,{useState}from 'react';
import NewRecordForm from './NewRecordForm';
import classes from './Dashboard.module.css';
import AddNewRecord from './AddNewRecord';
import UserRecordList from './UserRecordList';

const Dashboard = (props)=>{
    const[isUserFormEnable,setIsUserFormEnable] = useState(false);

    const UserFormEnableHandler = ()=>{
        setIsUserFormEnable(true);
    }

    return(
        <div className={classes.dashboard}>
            {!isUserFormEnable && <AddNewRecord onClick={UserFormEnableHandler}></AddNewRecord>}
            {isUserFormEnable && <NewRecordForm addNewUser={props.addNewUser}></NewRecordForm>}
            <UserRecordList items={props.items}></UserRecordList>
        </div>
    );
};

export default Dashboard;
