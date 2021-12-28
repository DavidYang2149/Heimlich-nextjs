import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, {
  RecordReducer,
  setRecord,
  addRecord,
  getRecord,
} from 'src/redux/lactation/record';
import { RootReducer } from 'src/redux/rootReducer';
import mockRootReducer from '__mocks__/fixtures/mockTools';

const middlewares = [thunk];
const mockStore = configureStore<RecordReducer | RootReducer, ThunkDispatch<RootReducer, void, AnyAction>>(middlewares);

describe('user reducers', () => {
  const initialState: RecordReducer = {
    record: [],
  };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRecord', () => {
    it('run setRecord', () => {
      const state = reducer(initialState, setRecord([]));

      expect(state).toEqual({
        ...initialState,
        record: [],
      });
    });
  });

  describe('addRecord', () => {
    it('addRecord reducer를 실행합니다', () => {
      const state = reducer(initialState, addRecord({
        lactationType: 'breastMilk',
        amount: 20,
        recordTime: '2021-12-27T23:36:14.119Z',
      }));

      expect(state).toEqual({
        ...initialState,
        record: [{
          lactationType: 'breastMilk',
          amount: 20,
          recordTime: '2021-12-27T23:36:14.119Z',
        }],
      });
    });
  });
});

describe('record functions', () => {
  describe('getRecord', () => {
    it('runs getLoginUser', () => {
      const store = mockStore({
        ...mockRootReducer,
      });
      store.dispatch(getRecord());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRecord([]));
    });
  });
});
