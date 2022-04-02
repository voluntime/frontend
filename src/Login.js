// import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SignUp from './SignUp';
import history from './history';
import React, { useState } from 'react';

function Login () {
    {/* TODO need setToken, verify user login */}
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <div className="login-form">
                <Typography variant="h2">{title}</Typography>
                <div className="form">
                    <form>
                        <div className="input-container">
                            <input type="text" name="email" placeholder="email" required onChange={e => setUserName(e.target.value)}/>
                            {/* {renderErrorMessage("email")} */}
                        </div>
                        <div className="input-container">
                            <input type="password" name="pass" placeholder="password" required onChange={e => setPassword(e.target.value)}/>
                            {/* {renderErrorMessage("pass")} */}
                        </div>
                        <div className="button-container">
                            <Button type="submit" variant="contained" color="primary">Login</Button>
                        </div>
                        <div className="button-container">
                            <Button variant="contained" color="secondary">Sign Up</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
