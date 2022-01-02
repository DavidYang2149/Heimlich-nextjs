import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { Lactation } from 'src/types/lactation';

export type RecordReducer = ReturnType<typeof reducer>;

export interface RecordState {
  records: Lactation[];
}

const initialState: RecordState = {
  records: [],
};

const { actions, reducer } = createSlice({
  name: 'record',
  initialState,
  reducers: {
    setRecords(state, { payload }: PayloadAction<Lactation[]>) {
      return {
        records: [...payload],
      };
    },
    unshiftRecord(state, { payload }: PayloadAction<Lactation>) {
      return {
        records: [payload, ...state.records],
      };
    },
  },
});

export const loadRecord = () => (dispatch: Dispatch<PayloadAction<Lactation[]>>) => {
  dispatch(actions.setRecords([]));
};

export const {
  setRecords,
  unshiftRecord,
} = actions;

export default reducer;
