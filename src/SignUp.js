// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Login from './Login';

function SignUp () {
    return (
        <div>
            <div className="login-form">
                <h2>sign up</h2>
                <div className="form">
                    <form>
                        <div classname="input-container" id="name">
                        <input type="text" name="uname" placeholder="name" required />
                            {/* {renderErrorMessage("uname")} */}
                        </div>
                        <div className="input-container">
                            <input type="text" name="email" placeholder="email" required />
                            {/* {renderErrorMessage("email")} */}
                        </div>
                        <div className="input-container">
                            <input type="password" name="pass" placeholder="password" required />
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
