import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { lactationType } from 'src/types/lactation';

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
  },
});

export const {
  setLactationType,
  setAmount,
} = actions;

export default reducer;
