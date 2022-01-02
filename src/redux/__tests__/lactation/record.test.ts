import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, {
  RecordReducer,
  setRecords,
  unshiftRecord,
  loadRecords,
} from 'src/redux/lactation/record';
import { RootReducer } from 'src/redux/rootReducer';
import mockRootReducer from '__mocks__/fixtures/mockTools';

const middlewares = [thunk];
const mockStore = configureStore<RecordReducer | RootReducer, ThunkDispatch<RootReducer, void, AnyAction>>(middlewares);

describe('user reducers', () => {
  const initialState: RecordReducer = {
    records: [],
  };

  context('state가 undefined이면', () => {
    it('initialState를 변환합니다', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRecords', () => {
    it('setRecords reducer를 실행합니다', () => {
      const state = reducer(initialState, setRecords([]));

      expect(state).toEqual({
        ...initialState,
        records: [],
      });
    });
  });

  describe('unshiftRecord', () => {
    it('unshiftRecord reducer를 실행합니다', () => {
      const state = reducer(initialState, unshiftRecord({
        lactationType: 'breastMilk',
        amount: 20,
        recordTime: '2021-12-27T23:36:14.119Z',
      }));

      expect(state).toEqual({
        ...initialState,
        records: [{
          lactationType: 'breastMilk',
          amount: 20,
          recordTime: '2021-12-27T23:36:14.119Z',
        }],
      });
    });
  });
});

describe('record functions', () => {
  describe('loadRecords', () => {
    it('loadRecords 함수를 실행합니다', () => {
      const store = mockStore({
        ...mockRootReducer,
      });
      store.dispatch(loadRecords());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRecords([]));
    });
  });
});
