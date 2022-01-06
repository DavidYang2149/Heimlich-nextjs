import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/redux/rootReducer';

import styles from 'styles/Home.module.css';

const MainContainer = () => {
  const { record } = useSelector((state: RootState) => ({
    record: state.record,
  }));

  const { records } = record;
  const recentRecord = (records.length > 0 && records[0]) || null;

  return (
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
  );
};

export default MainContainer;
