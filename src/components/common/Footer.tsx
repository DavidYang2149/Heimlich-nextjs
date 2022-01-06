import React from 'react';

import styles from 'styles/Home.module.css';

const Footer = () => {
  return (
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
  );
};

export default Footer;
