import Post from "./Post";
import styles from '../styles/PostList.module.css';
const PostList = ({posts}) => {
    return (
        <div className={styles.PostList}>
            {posts.map(post => {
                console.log(post.body.title);
                return <Post post={post}/>
            })}
        </div>
    );
}

export default PostList;