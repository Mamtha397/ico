import React ,{useRef}from 'react';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import classes from './NewRecordForm.module.css';
import InputField from '../../UI/InputField';

const NewRecordForm = (props)=>{
    const userName = useRef('');
    const amount = useRef(0);
    const date = useRef('');

    const newUserRecordFormSubmitHandler = (event)=>{
        event.preventDefault();
        const enteredUserName = userName.current.value;
        const enteredAmount = amount.current.value;
        const enteredDate = date.current.value;

        if(enteredUserName.trim().length!==0 && enteredAmount>=0 && enteredDate)
            props.addNewUser({
                userName:enteredUserName,
                amount:+enteredAmount,
                date:new Date(enteredDate)
            })


        userName.current.value='';
        amount.current.value='';
        date.current.value='';
    }

    return(
        <Card className={classes.cardNewRecordForm}>
            <form className={classes.newRecordForm} onSubmit={newUserRecordFormSubmitHandler}>
                <InputField 
                    imgName='userName.png' 
                    inputType='text'
                    ref={userName}></InputField>
                <InputField 
                    imgName='amount.png' 
                    inputType='number'
                    ref={amount}></InputField>
                <InputField 
                    imgName='calendar.png' 
                    inputType='date'
                    ref={date}></InputField>
            
                <Button className={classes.button} type='submit'>ADD RECORD</Button>
            </form>
        </Card>
    );
}

export default NewRecordForm;