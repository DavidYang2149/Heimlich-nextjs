import Head from 'next/head';

import LactationContainer from 'src/containers/lactation/LactationContainer';

import styles from 'styles/Insert.module.css';

const LactationPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>heimlich</title>
        <meta name="description" content="수유 노트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LactationContainer />
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

export default LactationPage;
