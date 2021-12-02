import Head from 'next/head';

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
        <h1 className={styles.title}>
          수유 일지
        </h1>
        <div>
          <label htmlFor="breastMilk" className={styles.label}>직수</label>
          <input type="radio" name="lactationType" id="breastMilk" value="breastMilk" readOnly />
          <label htmlFor="MotherBottleMilk" className={styles.label}>모유</label>
          <input type="radio" name="lactationType" id="MotherBottleMilk" value="MotherBottleMilk" readOnly />
          <label htmlFor="PowderedBottleMilk" className={styles.label}>분유</label>
          <input type="radio" name="lactationType" id="PowderedBottleMilk" value="PowderedBottleMilk" readOnly />
        </div>
        <div>
          <label htmlFor="amount" className={styles.label}>용량</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value="0"
            min="0"
            max="999"
            className={styles.amount}
            readOnly
          />
        </div>
        <div>
          <button type="button" className={styles.button}>저장</button>
        </div>
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
