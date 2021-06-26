import React, {useState,useEffect} from 'react';
import './App.css';
import Signup from './Assets/Components/Signup';
import Login from './Assets/Components/Login';
import Dashboard from './Assets/Components/Dashboard/Dashboard';
import Header from './Assets/Components/Header';

const medicalRecordList = [
  {
    userName:'xyz',
    amount:300.00,
    date: new Date(2020,2,12)
  },
]

function App() {

  const[medicalData,setMedicalData] = useState(medicalRecordList);

  const[isSignUP,setIsSignUp]=useState(false);
  const[isSignIn,setIsSignIn]=useState(true);
  const[isLoggedIn,setIsLoggedIn]=useState(false);

  const signUpHandler = ()=>{
    setIsSignUp(true);
    setIsSignIn(false);
    setIsLoggedIn(false);
  }

  const signInHandler = ()=>{
    localStorage.clear()
    setIsSignUp(false);
    setIsSignIn(true);
    setIsLoggedIn(false);
  }

  const loggedInHandler = (bool)=>{
    if(bool){
      setIsSignUp(false);
      setIsSignIn(false);
      setIsLoggedIn(true);
    }
  }

  const addNewUserHandler = (newUserData)=>{
    setMedicalData((prevState)=>{
        return[newUserData,...prevState];
      });
  }

  useEffect(()=>{
    let token = localStorage.getItem('token')
    if(token){
      loggedInHandler(true)
    }
  },[])

  return (
    <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogoutClicked={signInHandler}></Header>
        { isSignIn && <Login signUp={signUpHandler} isLoggedIn={loggedInHandler}></Login>}
        { isSignUP && <Signup signIn={signInHandler} isLoggedIn={loggedInHandler}></Signup>}
        { isLoggedIn && <Dashboard addNewUser={addNewUserHandler} items={medicalData}></Dashboard> }
    </div>
  );
}

export default App;
