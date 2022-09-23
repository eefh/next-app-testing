import Link from "next/link";
import styles from '../styles/Post.module.css';
const Post = ({post}) => {
    return (
        <Link href='/posts/[id]' as={`/posts/${post._id}`}className={styles.post}>
            <div className={styles.post}>
                <img className={styles.image} src={post.body.image}/>
                <h1>{post.body.title}</h1>
                <p>{post.body.date}</p>
            </div>
           
        </Link>
    );
}

export default Post;