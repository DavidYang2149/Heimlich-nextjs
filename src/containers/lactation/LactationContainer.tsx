import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'src/components/lactation/Button';
import InputBox from 'src/components/lactation/InputBox';
import RadioBoxes from 'src/components/lactation/RadioBoxes';
import { setLactationType, setAmount, saveLactation } from 'src/redux/lactation/interaction';
import { RootReducer } from 'src/redux/rootReducer';
import { lactationType as typeOfLactation } from 'src/types/lactation';
import { lactationOptions } from 'src/utils/constants';

import styles from 'styles/Insert.module.css';

const LactationContainer = () => {
  const dispatch = useDispatch();

  const { interaction } = useSelector((state: RootReducer) => ({
    interaction: state.interaction,
  }));

  const { lactationType, amount } = interaction;

  const handleInteractionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'lactationType') {
      dispatch(setLactationType(value as typeOfLactation));
    }

    if (name === 'amount') {
      dispatch(setAmount(parseInt(value, 10) || 0));
    }
  };

  const handleClickSaveRecord = () => {
    dispatch(saveLactation());
  };

  return (
    <>
      <h1 className={styles.title}>
        수유 일지
      </h1>
      <RadioBoxes
        name="lactationType"
        options={lactationOptions}
        value={lactationType}
        onChange={handleInteractionChange}
      />
      <InputBox
        id="amount"
        title="용량"
        value={amount}
        onChange={handleInteractionChange}
      />
      <Button onClick={handleClickSaveRecord} />
    </>
  );
};

export default LactationContainer;
