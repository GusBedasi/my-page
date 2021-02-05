import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
         Hi i'm Gustavo Bedasi backend developer at Mundipagg - StoneCo.
        </p>

        <p>
         So nice to see you here, checkout my side-projects.
        </p>

        <p>
          <a href="https://github.com/gusbedasi">My Github profile</a>
        </p>
      </section>
    </Layout>
  )
}