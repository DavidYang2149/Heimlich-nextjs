import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setInteraction } from 'src/redux/lactation/interaction';
import { RootReducer } from 'src/redux/rootReducer';

import styles from 'styles/Insert.module.css';

const LactationContainer = () => {
  const dispatch = useDispatch();

  const { interaction } = useSelector((state: RootReducer) => ({
    interaction: state.interaction,
  }));

  const { lactationType, amount } = interaction;

  const handleInteractionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setInteraction({ name, value }));
  };

  return (
    <>
      <h1 className={styles.title}>
        수유 일지
      </h1>
      <div>
        <label htmlFor="breastMilk" className={styles.label}>직수</label>
        <input
          type="radio"
          name="lactationType"
          id="breastMilk"
          value="breastMilk"
          onChange={handleInteractionChange}
          checked={lactationType === 'breastMilk'}
        />
        <label htmlFor="MotherBottleMilk" className={styles.label}>모유</label>
        <input
          type="radio"
          name="lactationType"
          id="MotherBottleMilk"
          value="MotherBottleMilk"
          onChange={handleInteractionChange}
          checked={lactationType === 'MotherBottleMilk'}
        />
        <label htmlFor="PowderedBottleMilk" className={styles.label}>분유</label>
        <input
          type="radio"
          name="lactationType"
          id="PowderedBottleMilk"
          value="PowderedBottleMilk"
          onChange={handleInteractionChange}
          checked={lactationType === 'PowderedBottleMilk'}
        />
      </div>
      <div>
        <label htmlFor="amount" className={styles.label}>용량</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          min="0"
          max="999"
          className={styles.amount}
          onChange={handleInteractionChange}
        />
      </div>
      <div>
        <button type="button" className={styles.button}>저장</button>
      </div>
    </>
  );
};

export default LactationContainer;
