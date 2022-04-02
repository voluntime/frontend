// import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

function Login () {
    const [title, setTitle] = useState("Sign In");
    const [buttonLabel, setButton] = useState("Login");

    return (
        <div>
            <div className="login-form">
                <Typography variant="h2">{title}</Typography>
                <div className="form">
                    <form>
                        <div classname="input-container" id="name"></div>
                        <div className="input-container">
                            <input type="text" name="uname" placeholder="email" required />
                            {/* {renderErrorMessage("uname")} */}
                        </div>
                        <div className="input-container">
                            <input type="password" name="pass" placeholder="password" required />
                            {/* {renderErrorMessage("pass")} */}
                        </div>
                        <div className="button-container">
                            <Button onclick={() => setButton("Sign up")}>{buttonLabel}</Button>
                        </div>
                        <div className="button-container">
                            <Button>Sign Up</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
