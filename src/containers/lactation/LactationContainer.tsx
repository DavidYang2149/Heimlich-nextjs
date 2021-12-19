import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputBox from 'src/components/lactation/InputBox';
import RadioBoxes, { Option } from 'src/components/lactation/RadioBoxes';
import { setInteraction } from 'src/redux/lactation/interaction';
import { RootReducer } from 'src/redux/rootReducer';

import styles from 'styles/Insert.module.css';

const LactationContainer = () => {
  const dispatch = useDispatch();

  const { interaction } = useSelector((state: RootReducer) => ({
    interaction: state.interaction,
  }));

  const { lactationType, amount } = interaction;
  const options: Option[] = [
    { title: '직수', lactation: 'breastMilk' },
    { title: '모유', lactation: 'MotherBottleMilk' },
    { title: '분유', lactation: 'PowderedBottleMilk' },
  ];

  const handleInteractionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setInteraction({ name, value }));
  };

  return (
    <>
      <h1 className={styles.title}>
        수유 일지
      </h1>
      <RadioBoxes
        name="lactationType"
        options={options}
        value={lactationType}
        onChange={handleInteractionChange}
      />
      <InputBox
        id="amount"
        title="용량"
        value={amount}
        onChange={handleInteractionChange}
      />
      <div>
        <button type="button" className={styles.button}>저장</button>
      </div>
    </>
  );
};

export default LactationContainer;
