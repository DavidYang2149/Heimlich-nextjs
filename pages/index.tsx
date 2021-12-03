import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>heimlich</title>
        <meta name="description" content="수유 노트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <figure className={styles.image}>
          <Image src="/assets/unicorn.svg" alt="unicorn Logo" width={200} height={200} />
        </figure>
        <h1 className={styles.title}>
          <Link href="/lactation">
            수유 기록하기
          </Link>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/DavidYang2149/heimlich-nextjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <span className={styles.logo}>
            Red Sea
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
