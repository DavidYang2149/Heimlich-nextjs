import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, {
  RecordReducer,
  setRecord,
  getRecord,
} from 'src/redux/lactation/record';
import { RootReducer } from 'src/redux/rootReducer';
import mockRootReducer from '__mocks__/fixtures/mockTools';

const middlewares = [thunk];
const mockStore = configureStore<RecordReducer | RootReducer, ThunkDispatch<RootReducer, void, AnyAction>>(middlewares);

describe('user reducer', () => {
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
