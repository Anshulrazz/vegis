import React from 'react';
import './login.css';
import { Link } from 'react-router-dom'
import { LogIn, CircleUserRound } from 'lucide-react';

const Login = () => {
    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="Username" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password" />
                        </div>

                        <button className="button login__submit">
                            <span className="button__text">Log In Now&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <i><LogIn /></i>
                        </button>
                    </form>
                    <div className="some">
                        <Link
                            to={"/forgetPassword"}
                            className='hover:text-[#ffff] transition-all duration-150 ease font-medium'
                        >Forgot Password?</Link>

                        <Link
                            to={"/signUp"}
                            className='hover:text-[#ffff] transition-all duration-150 ease font-medium'
                        ><p className='flex'><CircleUserRound />Create account</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
