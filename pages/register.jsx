import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './api/firebase-config';
import Router, { useRouter } from 'next/router';

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const router = useRouter();

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            router.push('/');
            console.log(user);
        } catch (error) {
            alert(error.message);
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