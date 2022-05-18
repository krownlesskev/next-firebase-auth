import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Firebase Auth App</title>
        <meta name="description" content="Nextjs Firebase Authentication" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home Page</h1>
    </div>
  );
}
