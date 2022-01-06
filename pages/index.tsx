import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRecords } from 'src/redux/lactation/record';
import { RootState } from 'src/redux/rootReducer';

import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecords());
  }, [dispatch]);

  const { record } = useSelector((state: RootState) => ({
    record: state.record,
  }));

  const { records } = record;
  const recentRecord = (records.length > 0 && records[0]) || null;

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
        {
          recentRecord && (
            <h2>
              마지막 수유 시간:
              {' '}
              {recentRecord.recordTime.replace('T', ' ').substring(0, 16)}
            </h2>
          )
        }
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
