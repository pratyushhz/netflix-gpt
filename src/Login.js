import './App.css';
import Header from './Header';
import { useState } from 'react';
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }


    return (
        <div>
            <Header/>
            <div className="absolute top-0 w-full">
                <div className="showcase-content">
                    <div className="formm">
                        <form>
                            <h1>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                            <div className="info">
                                {!isSignInForm && (<input className="email" type="text" placeholder="Full Name" />)}
                                <br />
                                <input className="email" type="email" placeholder="Email or phone number" /> 
                                <br />
                                    <input className="email" type="password" placeholder="Password" />
                                    </div>
                                    <div className="btn">
                                        <button className="btn-primary" type="submit">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                                    </div>
                                    <div className="help items-center">
                                        <div>
                                            <input value="true" type="checkbox" /><label>Remember me</label>
                                        </div>

                                        <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Already an user, Sign in Now"}</p>

                                    </div>

                            </form>

                            <div />

                            {/* <div className="fcbk">
                                <a href="https://facebook.com">
                                    <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
                                </a>
                                <p>Login with Facebook</p>
                            </div>
                            <div className="signup">
                                <p>New to Netflix ?</p>
                                <a href="/">Sign up now</a>
                            </div>
                            <div className="more">
                                <p>
                                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
                                </p>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login