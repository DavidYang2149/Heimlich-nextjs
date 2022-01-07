import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Footer from 'src/components/common/Footer';
import MainContainer from 'src/containers/lactation/MainContainer';
import { loadRecords } from 'src/redux/lactation/record';

import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecords());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>heimlich</title>
        <meta name="description" content="수유 노트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Home;
