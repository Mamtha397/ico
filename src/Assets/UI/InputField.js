import React from 'react';
import classes from './InputField.module.css';

const InputField = React.forwardRef((props, ref)=>{
    return(
    <div className={classes.inputField}>
        <img src={`${process.env.PUBLIC_URL}/Images/${props.imgName}`} alt=''/>
        <input type = {props.inputType || 'text'} ref={ref}></input>
    </div>
    );
})

export default InputField;