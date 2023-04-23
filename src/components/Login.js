import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "../styles/Login.css";

const Login = () => {
    const history = useNavigate();
    const [userType, setUserType] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!userType) {
            alert("Please enter your user type.");
            return;
        }
        else if (!username) {
            alert("Please enter your username.");
            return;
        }
        else if (!password) {
            alert("Please enter your password.");
            return;
        }

        // else {
        //     try {
        //         await axios.post()
        //             .then(res => {
        //             })
        //             .catch(error => {
        //                 if (error.response) {
        //                     console.log(error.response.data);
        //                     alert("Registration failed!");
        //                 }
        //             })
        //     }
        //     catch (err) {
        //         console.log(err);
        //     }
        // }
    }

    return (
        <div className='LoginPage'>
            <div className='backGround'></div>
            <form className='authForm' method='post'>
                <h1 className='authHead'>Login</h1>
                {/* referenced from Metty on https://codepen.io/Metty/pen/MWjOavR */}
                <div className="buttonWrapper">
                    <input type="radio" id="student" name="userType" value="student" onChange={(e) => setUserType(e.target.value)} />
                    <label htmlFor="student" className="option student">
                        <div className="dot"></div>
                        <span>student</span>
                    </label>
                    <br />
                    <input type="radio" id="faculty" name="userType" value="faculty" onChange={(e) => setUserType(e.target.value)} />
                    <label htmlFor="faculty" className="option faculty">
                        <div className="dot"></div>
                        <span>faculty</span>
                    </label>
                    <br />
                </div>
                <div>
                    <input type="username" onChange={(e) => setUsername(e.target.value)} placeholder='username' id="username" name="username" />
                </div>
                <div>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' id="password" name="password" />
                </div>

                <button className='authSubmit' onClick={handleSubmit}> Submit </button>
                <br />
                <p className='remind'>Not yet registered?</p>
                <Link to='/register' className='authLink'>Registration Page</Link>
            </form>
        </div>
    )
}
export default Login;