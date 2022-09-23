import Header from './Header';
import PostList from './PostList';

const Layout = ({children}) => {

    return (
        <div>
            <Header/>
            {children}
            <PostList/>
        </div>
    );
}

export default Layout;