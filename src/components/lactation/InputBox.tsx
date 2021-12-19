import React from 'react';

import styles from 'styles/Insert.module.css';

export interface Props {
  id: string;
  title: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({
  id, title, value, onChange,
}: Props) => {
  return (
    <div>
      <label htmlFor={id} className={styles.label}>{title}</label>
      <input
        type="number"
        id={id}
        name={id}
        value={value}
        min="0"
        max="999"
        className={styles.amount}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
