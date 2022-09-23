import { useRouter } from "next/router";
import styles from '../../../styles/Page.module.css'
const post = ({post}) => {
    return (
        <div className={styles.Page}>
            <h1>{post.posts[0].body.title}</h1>
            <img src={post.posts[0].body.image}/>
            <p className={styles.date}>{post.posts[0].body.date}</p>
            <p>{post.posts[0].body.data}</p>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://next-app-testing-api-lqma.vercel.app/api/posts`);
    const post = await res.json()

    return {
        props: {
            post
        }
    }    
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://next-app-testing-api-lqma.vercel.app/api/posts`);
    const posts = await res.json()
    const ids = posts.posts.map(post => post._id);

    const paths = ids.map((id) => ({params: {id: id.toString()}}));
    return {
        paths,
        fallback: false
    }
}

export default post;