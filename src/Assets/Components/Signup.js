import React,{useRef} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import InputField from '../UI/InputField';
import classes from './Signup.module.css';


const Signup = (props)=>{
    const userName = useRef('');
    const email = useRef('');
    const password = useRef('');

    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredUserName = userName.current.value;
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        if(enteredUserName.trim().length !== 0 && enteredPassword.length !== 0){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("name", enteredUserName);
            urlencoded.append("email", enteredEmail);
            urlencoded.append("password", enteredPassword);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            };

            fetch("http://localhost:8000/user/signUp", requestOptions)
            .then(response => response.json())
            .then(result => {
                props.signIn(); 
            })
            .catch(error => console.log('error', error));
        }
    }

    return(
        <Card className={classes.signupCard}>
            <form className={classes.signupForm} onSubmit={submitHandler}>
                <h2>Sign Up</h2>
                <InputField 
                    imgName='userName.png' 
                    inputType='text'
                    ref={userName}
                />
                 <InputField 
                    imgName='email.png'
                    inputType='text'
                    ref={email}
                />
                 <InputField 
                    imgName='password.png'
                    inputType='password'
                    ref={password}
                />
                <Button className={classes.button} type='submit'>CREAT ACCOUNT</Button>
                <div className={classes.footer}>
                <p>Already have an account?</p>
                <p onClick={props.signIn} className={classes.signInButton}>Sign In</p>
                </div>
            </form>
        </Card>
    );
}

export default Signup;