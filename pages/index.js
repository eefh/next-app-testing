import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@fontsource/cutive-mono';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PostList from '../components/PostList';

export default function Home({posts = []}) {
  return (
    <div className={styles.main}>
      <Head>
        <title>blog blog blog</title>
      </Head>
      <Header/>
      <PostList {...posts}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3003/api/posts`)
  const posts = await res.json();
  return {
    props: {
      posts
    }
  }
}