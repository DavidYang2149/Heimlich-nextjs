import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { Lactation } from 'src/types/lactation';
import { loadItem } from 'src/utils/storage';

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
  const result = loadItem({ key: 'record' });
  const records = (result && JSON.parse(result)) || [];

  dispatch(actions.setRecords(records));
};

export const {
  setRecords,
  unshiftRecord,
} = actions;

export default reducer;
