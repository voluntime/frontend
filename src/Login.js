// import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SignUp from './SignUp';
import history from './history';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    
}

function Login ({ setToken }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken(token);
    }

    return (
        <div>
            <div className="login-form">
                <Typography variant="h2">login</Typography>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input type="text" name="email" placeholder="email" required onChange={e => setEmail(e.target.value)}/>
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;
