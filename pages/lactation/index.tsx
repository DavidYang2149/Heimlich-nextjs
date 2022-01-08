import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Footer from 'src/components/common/Footer';
import LactationContainer from 'src/containers/lactation/LactationContainer';
import { setRecordTime } from 'src/redux/lactation/interaction';

import styles from 'styles/Insert.module.css';

const LactationPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const NOW = new Date().toISOString();
    dispatch(setRecordTime(NOW));
  }, []); // eslint-disable-line

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
      <Footer />
    </div>
  );
};

export default LactationPage;
