import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { Lactation } from 'src/types/lactation';

export type RecordReducer = ReturnType<typeof reducer>;

export interface RecordState {
  record: Lactation[];
}

const initialState: RecordState = {
  record: [],
};

const { actions, reducer } = createSlice({
  name: 'record',
  initialState,
  reducers: {
    setRecord(state, { payload }: PayloadAction<Lactation[]>) {
      return {
        record: [...payload],
      };
    },
    unshiftRecord(state, { payload }: PayloadAction<Lactation>) {
      return {
        record: [payload, ...state.record],
      };
    },
  },
});

export const getRecord = () => (dispatch: Dispatch<PayloadAction<Lactation[]>>) => {
  dispatch(actions.setRecord([]));
};

export const {
  setRecord,
  unshiftRecord,
} = actions;

export default reducer;
