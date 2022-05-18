import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './api/firebase-config';

export const logout = async () => {
    await signOut(auth);
};

const Signin = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="email" placeholder='Email'
                    autoComplete='email'
                    onChange={(e) => { setLoginEmail(e.target.value); }} />
                <input type="password" placeholder='Password'
                    autoComplete='current-password'
                    onChange={(e) => { setLoginPassword(e.target.value); }} />
            </form>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Signin;