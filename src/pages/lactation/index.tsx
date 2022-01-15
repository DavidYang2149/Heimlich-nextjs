import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CustomHead from 'src/components/common/CustomHead';
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
      <CustomHead />
      <main className={styles.main}>
        <LactationContainer />
      </main>
      <Footer />
    </div>
  );
};

export default LactationPage;
