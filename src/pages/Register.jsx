import React, {useState} from "react";
import './login.css';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
                    Hello!
                </div>
                <div className="detailText">
                    Please register as a member to experience.
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className="email">Email</label>
                        <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" /> <br />
                        <br />
                        <label htmlfor="password" className="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" /> <br />
                        <br />
                        <button className="lrBtn" type="sumbit">Register</button>
                    </form>
                    <div className="textAcc">
                        Already have an account? <button className="btnLr" onClick={() =>navigate('/login')}> Log In</button>
                    </div>
        
                </div>
            </div>
        
        </div>
        
    )
}
export default Register