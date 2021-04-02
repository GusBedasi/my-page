import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts } from '../scripts/blog/PostService'

import Nav from '../components/menu/nav'
import styles from './styles.module.css'

export default function Blog({ posts }) {
  return (
    <>
      <Head> <title> Home </title> </Head>
      <Nav />
      <div className={styles.container}>
        <h1>
          Posts
        </h1>
        {posts.map((post) => (
          <div key={post.metadata.title} className={styles.postsWrapper}>
            <article>
              <h2>
                <Link href={`/posts/${post.metadata.slug}`}>
                    {post.metadata.title}
                </Link>
              </h2>
              <p>
                {post.metadata.excerpt}
              </p>
            </article>
          </div>
        ))}
        <p className={styles.contact}>
          [
            <a target="_blank" href="https://github.com/gusbedasi">Github</a>,
            <a target="_blank" href="https://www.linkedin.com/in/gustavobedasi/"> Linkedin</a>
          ]
        </p>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts
    }
  }
}