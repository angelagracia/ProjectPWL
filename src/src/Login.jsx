import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        email.preventDevault();
        console.log(email);
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
                <label htmlfor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
                <button type="sumbit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}> Don't have an account? Create Account</button>
        </div>
    )
}