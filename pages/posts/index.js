import PostsList from "../../components/PostsList"

const posts = ({ posts }) => {
    return (
        <>
            <PostsList posts={posts} />            
        </>
    )
}

export default posts

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return {
        props: {
            posts
        }
    }
}