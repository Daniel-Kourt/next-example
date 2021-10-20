import PostCard from "./PostCard"
import styles from '../styles/Home.module.css'


const PostsList = ({posts}) => {
    return (
        <div className={styles.grid}> 

            {posts.map(post => (
                <PostCard post={post} key={post.id} />
            ))}
            
        </div>
    )
}

export default PostsList
