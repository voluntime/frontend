// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Login from './Login';

function SignUp () {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <div className="login-form">
                <Typography variant="h2">sign up</Typography>
                <div className="form">
                    <form>
                        <div classname="input-container" id="name">
                        <input type="text" name="uname" placeholder="name" required onChange={e => setUserName(e.target.value)}/>
                            {/* {renderErrorMessage("uname")} */}
                        </div>
                        <div className="input-container">
                            <input type="text" name="email" placeholder="email" required onChange={e => setEmail(e.target.value)}/>
                            {/* {renderErrorMessage("email")} */}
                        </div>
                        <div className="input-container">
                            <input type="password" name="pass" placeholder="password" required onChange={e => setPassword(e.target.value)}/>
                            {/* {renderErrorMessage("pass")} */}
                        </div>
                        <div className="button-container">
                            <Button type="submit" variant="contained" color="primary">Sign Up</Button>
                        </div>
                        <p>Have an account? <a>login</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
