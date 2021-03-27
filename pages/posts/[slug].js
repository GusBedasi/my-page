import Head from 'next/head'

import Nav from '../../components/menu/nav'
import styles from '../styles.module.css'

import { getAllPosts, getPost } from '../../scripts/blog/PostService';

const Post = ({ metadata, content }) => {
  return (
    <>
      <Head>
        <title> About </title>
      </Head>
      <Nav />

      <div className={styles.container}>
        <article>
          <h2>
            {metadata.title}
          </h2>
          <h4>
            {metadata.date}
          </h4>
          <h4>
            {metadata.excerpt}
          </h4>
            {content}
        </article>
      </div>
    </>
  );
}

export default Post

export const getStaticProps = ({params}) => {
  const {metadata, content} = getPost(params.slug)

  return {
    props: {
      metadata,
      content
    }
  }
}

export const getStaticPaths = () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.metadata.slug,
      },
    })),
    fallback: false,
  }
}