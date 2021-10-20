import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/cases'>
                        <a>Cases</a>
                    </Link>
                </li>
                <li>
                    <Link href='/deaths'>
                        <a>Deaths</a>
                    </Link>
                </li>
                <li>
                    <Link href='/photos'>
                        <a>Photos</a>
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Nav
