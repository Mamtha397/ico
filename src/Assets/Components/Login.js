import React ,{useRef} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import InputField from '../UI/InputField';
import classes from './Login.module.css';


const Login = (props)=>{
    const userName = useRef('');
    const password = useRef('');

    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredUserName = userName.current.value;
        const enteredPassword = password.current.value;

        if(enteredUserName.trim().length !== 0 && enteredPassword.length !== 0){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("username", enteredUserName);
            urlencoded.append("password", enteredPassword);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            };

            fetch("http://localhost:8000/user/signIn", requestOptions)
            .then(response => response.json())
            .then(result => {
                localStorage.setItem('token',result.token)
                // console.log(result)
                props.isLoggedIn(true); 
            })
            .catch(error => console.log('error', error));

            userName.current.value = '';
            password.current.value = '';
        }
    }

    return(
        <Card className={classes.signinCard}>
            <form className={classes.signinForm} onSubmit={submitHandler}>
                <div className={classes.signinFormBody}>
                    <h2>Sign In</h2>
                    <InputField 
                        imgName='userName.png' 
                        inputType='text'
                        ref={userName}
                    />
                    <InputField 
                        imgName='password.png'
                        inputType='password'
                        ref={password}
                    />
                </div>
                <div>
                    <p onClick={()=>{
                        console.log('ForgotPassword');
                    }} className={classes.forgotPassword}>Forgot Password</p>
                </div>
                <Button className={classes.button} type='submit'>SIGN IN</Button>
                <div className={classes.footer}>
                    <p>Don't have a acoount...</p>
                    <p onClick={props.signUp} className={classes.signUpButton}>Sign UP!</p>
                </div>
            </form>
        </Card>
    );
}

export default Login;