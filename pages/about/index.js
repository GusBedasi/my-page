import Head from 'next/head'
import Link from 'next/link'

import Nav from '../../components/menu/nav'

import utilStyles from '../../styles/utils.module.css'
import styles from './about.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> About </title>
      </Head>

      <Nav />

      <div className={styles.container}>
        <header className={styles.header}>
          <img
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt="Gustavo Bedasi"           
          />
          <h1 className={utilStyles.heading2Xl}>Gustavo Bedasi</h1>
        </header>

        <main>
          <section className={utilStyles.headingMd}>
            <p>
              Hi i'm Gustavo Bedasi backend developer at Mundipagg.
            </p>

            <p>
              So nice to see you here, checkout my side-projects.
            </p>

            <p>
              <a href="https://github.com/gusbedasi">My Github profile</a>
            </p>
          </section>
        </main>

        <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
        </div>
      </div>

    </>
  )
}