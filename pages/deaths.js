import Meta from '../components/Meta'
import styles from '../styles/Deaths.module.css'

const deaths = ({deaths}) => {

    //console.log(deaths);

    return (
        <>
            <Meta title="Next App | Covid-19 Deaths"/>
            <div>
                <h2>Covid-19 Deaths</h2>

                {deaths.map(item => (
                    <div className={styles.card} key={item.DATE + Math.random().toString()}>
                        <p className={styles.item}>{item.DATE}</p>
                        <p className={styles.item}>{item.REGION}</p>
                        <p className={styles.item}>{item.AGEGROUP}</p>
                        <p className={styles.item}>{item.SEX}</p>
                        <p className={styles.item}>{item.DEATHS}</p>

                    </div>
                ))}
                
            </div>
        </>
    )
}

export default deaths

export const getStaticProps = async () => {
    const res = await fetch('https://epistat.sciensano.be/Data/COVID19BE_MORT.json');
    const deaths = await res.json();

    const reversed = deaths.reverse();

    const deathsSliced = reversed.slice(0,200);

    return {
        props: {
            deaths: deathsSliced
        },
        revalidate: 60
    }
}
