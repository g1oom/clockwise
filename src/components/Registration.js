import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "../styles/Login.css";

const Registration = () => {
    const history = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!username) {
            alert("Please enter a username.");
            return;
        }
        else if (!password) {
            alert("Please enter a password.");
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
        <div className='RegistrationPage'>
            <form className='authForm' method='post'>
                <h1 className='authHead'>Registration</h1>
                <div>
                    <input type="username" onChange={(e) => setUsername(e.target.value)} placeholder='username' id="username" name="username" />
                </div>
                <div>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' id="password" name="password" />
                </div>
                <button className='authSubmit' onClick={handleSubmit}> Submit </button>
                <br />
                <p className='remind' style={{ marginRight: 0, transform: "translate(-7%, 0)" }}>Already registered?</p>
                <Link to='/' className='authLink' style={{ padding: 0, transform: "translate(-3%, 0)" }}>Login Page</Link>
            </form>
        </div>
    )
}

export default Registration;