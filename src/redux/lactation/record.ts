import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { Lactation } from 'src/types/lactation';

export type RecordState = ReturnType<typeof reducer>;

export interface RecordSliceState {
  records: Lactation[];
}

const initialState: RecordSliceState = {
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

export const loadRecords = () => (dispatch: Dispatch<PayloadAction<Lactation[]>>) => {
  dispatch(actions.setRecords([]));
};

export const {
  setRecords,
  unshiftRecord,
} = actions;

export default reducer;
