import Image from 'next/image'
import styles from '../styles/Home.module.css'

const PhotoCard = ({photo}) => {

    const {title, thumbnailUrl, albumId, id} = photo;

    return (
        <div className={styles.card}>
            <Image 
                src={thumbnailUrl}
                width={240}
                height={160}
            />
            <h3>{title}</h3>
            <h3>{id}</h3>
            
        </div>
    )
}

export default PhotoCard
