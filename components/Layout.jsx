import Navbar from "./Navbar";
import { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../pages/api/firebase-config";

const Layout = ({ children }) => {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return (
        <>
            <Navbar user={user} />
            <div>{children}</div>
        </>
    );
};

export default Layout;