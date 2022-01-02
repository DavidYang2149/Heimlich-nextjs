import React from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'src/components/lactation/Button';
import InputBox from 'src/components/lactation/InputBox';
import RadioBoxes from 'src/components/lactation/RadioBoxes';
import { setLactationType, setAmount, saveLactation } from 'src/redux/lactation/interaction';
import { RootState } from 'src/redux/rootReducer';
import { lactationType as typeOfLactation } from 'src/types/lactation';
import { lactationOptions } from 'src/utils/constants';

import styles from 'styles/Insert.module.css';

const LactationContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { interaction } = useSelector((state: RootState) => ({
    interaction: state.interaction,
  }));
  const { lactationType, amount } = interaction;

  const handleChangeInteraction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'lactationType') {
      const type = value as typeOfLactation;
      dispatch(setLactationType(type));
    }

    if (name === 'amount') {
      const number = parseInt(value, 10) || 0;
      dispatch(setAmount(number));
    }
  };

  const handleClickSaveRecord = () => {
    dispatch(saveLactation());
    router.push('/');
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
        onChange={handleChangeInteraction}
      />
      <InputBox
        id="amount"
        title="용량"
        value={amount}
        onChange={handleChangeInteraction}
      />
      <Button onClick={handleClickSaveRecord} />
    </>
  );
};

export default LactationContainer;
