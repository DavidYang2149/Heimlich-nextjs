import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import RecentRecord from 'src/components/lactation/RecentRecord';
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
        recentRecord && (<RecentRecord record={recentRecord} />)
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
