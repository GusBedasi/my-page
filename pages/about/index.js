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
              So nice to see you here, to make you know me a littler better, 
              i'm gonna tell you about me.
            </p>

            <h3>Story time</h3>

            <p>
              I`m 21 years old dude that loves his girlfriend very much and who is` moving to live by 
              myself, doing it to improve as a person, become independent and more responsable.
            </p>

            <p>
              On tech, currently i`m a backend developer at Mundipagg StoneCo Company, studing .NET and .NET core framework, SOLID principles, with very strong knowledge with node, react and docker. 
            </p>
            <p>  
              Just with 7 months of experience and no college degree i`ve accomplished very important collaboration within the Brazil payment market, the project was to build a software responsible to QRCODE payment method, 
              and because of COVID-19 pandemic we added a feature not scoped to accept emergencial aid <strong>(that was given by the Brazil government at the time)</strong>, so the brazillian people be able to buy all 
              needed things at stores with Stone's POS <strong>(point of sale)</strong>, i`m very proud of this project because i know that help a lot of people on Brazil. To such amazing project of course i would never be alone, i`ve had such a incredible team whom helped me, for us to complete together this amazing application. 
            </p>

            <h4>Contacts</h4>
            <p>
              [
                <a href="https://github.com/gusbedasi">Github</a>,
                <a href="https://linkedin.com/gusbedasi"> Linkedin</a>
               ]
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