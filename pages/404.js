import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000);        
    }, [])

    return (
        <div className={styles.container}>
           <h3>This page does not exist</h3>
           <p>You will redirect automatically to homepage in 2 secs !</p>
           <Link href="/">
               <a>Return to homepage now</a>
           </Link>

        </div>
    )
}

export default NotFound
