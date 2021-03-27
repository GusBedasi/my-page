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
        <h2>
          {metadata.title}
        </h2>
        <article>
          <p>
            {metadata.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </>
  );
}

export default Post;

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