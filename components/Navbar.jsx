import Link from "next/link";
import styles from '../styles/Navbar.module.scss';
import { logout } from "../pages/signin";

const Navbar = ({ user }) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                {!user ?
                    <>
                        <Link  href='/signin'>Sign In</Link>
                        <Link  href='/register'>Register</Link>
                    </>
                    :
                    <>
                        <Link href='/'>Home</Link>
                        <Link href='/' onClick={logout}>Sign Out</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;