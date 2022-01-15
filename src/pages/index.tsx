import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CustomHead from 'src/components/common/CustomHead';
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
      <CustomHead />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Home;
