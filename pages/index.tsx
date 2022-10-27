import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Backend Track of HNG9</title>
        <meta name="description" content="Solutions for Backend tasks HNG9" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/api">Backend track of HNG9!</a>
        </h1>

      
      </main>
    </div>
  )
}
