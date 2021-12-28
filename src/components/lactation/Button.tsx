import React from 'react';

import styles from 'styles/Insert.module.css';

export interface Props {
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ disabled, onClick }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={styles.button}
        disabled={disabled}
        onClick={onClick}
      >
        저장
      </button>
    </div>
  );
};

export default Button;
