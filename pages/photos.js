import PhotoCard from '../components/PhotoCard'
import styles from '../styles/Home.module.css'

const photos = ({photos}) => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {photos.map(photo => (
                    <PhotoCard photo={photo} key={photo.id} />
                ))}
            </div>

            
        </div>
    )
}

export default photos

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await res.json();

    const photos_sliced = photos.slice(0,100);

    return {
        props: {
            photos: photos_sliced
        }
    }
}
