import React, {useState} from "react";
import './login.css';
import logo from '../img/logo.png';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        email.preventDefault();
        console.log(email);
    }

    return (
        <div className="containerlr">
            <div className="cartoon">

            </div>
            <div className="wrapperlr">
                <div className="brand2">
                    <img src={logo} alt="logo" />
                    <span>Ourlib</span>
                </div>
                <div className="welcomeText">
                    Welcome Back!
                </div>
                <div className="detailText">
                    Please enter your details
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className="email">Email</label><br />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" /> <br />
                        <br />
                        <label htmlFor="password" className="password">Password</label> <br />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" /> <br />
                        <br />
                        <button className="lrBtn" type="sumbit">Log In</button><br />
                    </form>
                    <div className="textAcc">
                        Don't have an account? <button className="btnLr" onClick={() => props.onFormSwitch('register')}> Create Account</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
export default Login