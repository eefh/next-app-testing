import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@fontsource/cutive-mono';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PostList from '../components/PostList';
import Footer from '../components/Footer';

export default function Home({posts = []}) {
  return (
    <div className={styles.main}>
      <Head>
        <title>blog blog blog</title>
      </Head>
      <Header/>
      <PostList {...posts}/>
      <Footer/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://next-app-testing-api-lqma.vercel.app/api/posts`)
  const posts = await res.json();
  return {
    props: {
      posts
    }
  }
}