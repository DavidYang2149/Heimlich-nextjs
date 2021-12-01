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
    setInteraction(state, { payload: { name, value } }: PayloadAction<{ name: string, value: lactationType | number | string }>) {
      return {
        ...state,
        [name]: value,
      };
    },
  },
});

export const {
  setInteraction,
} = actions;

export default reducer;
