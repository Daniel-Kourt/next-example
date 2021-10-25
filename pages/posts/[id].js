import Link from 'next/link'
import Meta from '../../components/Meta'
import styles from '../../styles/Post.module.css'


const Post = ({post, comments}) => {

    //const router = useRouter();

    const {id, title, body} = post;

    return (
        <>
            <Meta title={title} />

            <div className={styles.container}>
                <div className={styles.post}>
                    <h3>{id}) {title}</h3>
                    <p>{body}</p>
                    <Link href="/">
                        <a>Return to homepage</a>
                    </Link>
                </div>                

                <div className={styles.comments}>
                    {comments.map(comment => (
                        <div key={comment.id} className={styles.commentCard}>
                            <h4>
                                {comment.name}
                            </h4>
                            <p>
                                By: {comment.email}
                            </p>
                            <p>
                                {comment.body}
                            </p>

                        </div>
                    ))}
                </div>
            
                
            </div>
        </>
    )
}

export default Post



export const getStaticProps = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();

    const res_comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
    const comments = await res_comments.json();

    return {
        props: {
            post,
            comments
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const ids = posts.map(post => post.id);
    const paths = ids.map(id => ({
        params: {
            id: id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}