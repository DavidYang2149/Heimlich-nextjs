import React from 'react';

import { lactationType } from 'src/types/lactation';

import styles from 'styles/Insert.module.css';

export interface Option {
  title: string;
  lactation: lactationType;
}

export interface Props {
  name: string;
  options: Option[];
  value: lactationType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioBoxes = ({
  name, options, value, onChange,
}: Props) => {
  return (
    <div>
      {
        options.map(({ title, lactation }) => (
          <React.Fragment key={lactation}>
            <label htmlFor={lactation} className={styles.label}>{title}</label>
            <input
              type="radio"
              name={name}
              id={lactation}
              value={lactation}
              onChange={onChange}
              checked={value === lactation}
            />
          </React.Fragment>
        ))
      }
    </div>
  );
};

export default RadioBoxes;
