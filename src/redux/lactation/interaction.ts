import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { RootReducer } from 'src/redux/rootReducer';
import { Lactation, lactationType } from 'src/types/lactation';

import { addRecord } from './record';

export type InteractionReducer = ReturnType<typeof reducer>;

export interface InteractionState {
  lactationType: lactationType;
  amount: number;
  recordTime: string;
}

const initialState: InteractionState = {
  lactationType: 'breastMilk',
  amount: 0,
  recordTime: '',
};

const { actions, reducer } = createSlice({
  name: 'interaction',
  initialState,
  reducers: {
    setLactationType(state, { payload: value }: PayloadAction<lactationType>) {
      return {
        ...state,
        lactationType: value,
      };
    },
    setAmount(state, { payload: value }: PayloadAction<number>) {
      return {
        ...state,
        amount: value,
      };
    },
    setRecordTime(state, { payload: value }: PayloadAction<string>) {
      return {
        ...state,
        recordTime: value,
      };
    },
    clearInteraction(state) {
      return {
        ...state,
        lactationType: 'breastMilk',
        amount: 0,
        recordTime: '',
      };
    },
  },
});

export const saveLactation = () => (
  dispatch: Dispatch<PayloadAction<Lactation | undefined>>,
  getState: () => RootReducer,
) => {
  const { interaction } = getState();

  dispatch(addRecord(interaction));
  dispatch(actions.clearInteraction());
};

export const {
  setLactationType,
  setAmount,
  setRecordTime,
  clearInteraction,
} = actions;

export default reducer;
