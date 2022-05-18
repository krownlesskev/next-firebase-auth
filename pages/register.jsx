import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './api/firebase-config';

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div>
            <h1>Register User</h1>
            <form>
                <input type="email" placeholder="Email" autoComplete='email'
                    onChange={(e) => { setRegisterEmail(e.target.value); }} />
                <input type="password" placeholder="Password" autoComplete='new-password'
                    onChange={(e) => { setRegisterPassword(e.target.value); }} />
            </form>
                <button onClick={register}>Create User</button>
        </div>
    );
};

export default Register;