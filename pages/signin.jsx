import { useState } from 'react';

export const logout = async () => {

};

const Signin = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {

    };



    return (
        <div>
            <h1>Login</h1>
            <input type="email" placeholder='Email'
                onChange={(e) => { setLoginEmail(e.target.value); }} />
            <input type="password" placeholder='Password'
                onChange={(e) => { setLoginPassword(e.target.value); }} />
            <button>Login</button>
        </div>
    );
};

export default Signin;