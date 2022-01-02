import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, {
  InteractionReducer,
  setLactationType,
  setAmount,
  setRecordTime,
  clearInteraction,
  saveLactation,
  InteractionState,
} from 'src/redux/lactation/interaction';
import { unshiftRecord } from 'src/redux/lactation/record';
import { RootState } from 'src/redux/rootReducer';
import mockRootState from '__mocks__/fixtures/mockTools';

const middlewares = [thunk];
const mockStore = configureStore<InteractionReducer | RootState, ThunkDispatch<RootState, void, AnyAction>>(middlewares);

describe('interaction reducers', () => {
  const initialState: InteractionReducer = {
    lactationType: 'breastMilk',
    amount: 0,
    recordTime: '',
  };

  context('state가 undefined이면', () => {
    it('initialState를 변환합니다', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setLactationType', () => {
    it('setLactationType reducer를 실행합니다 ', () => {
      const state = reducer(initialState, setLactationType('PowderedBottleMilk'));

      expect(state).toEqual({
        ...initialState,
        lactationType: 'PowderedBottleMilk',
      });
    });
  });

  describe('setAmount', () => {
    it('setAmount reducer를 실행합니다', () => {
      const state = reducer(initialState, setAmount(20));

      expect(state).toEqual({
        ...initialState,
        amount: 20,
      });
    });
  });

  describe('setRecordTime', () => {
    it('setRecordTime reducer를 실행합니다', () => {
      const NOW = new Date().toISOString();
      const state = reducer(initialState, setRecordTime(NOW));

      expect(state).toEqual({
        ...initialState,
        recordTime: NOW,
      });
    });
  });

  describe('clearInteraction', () => {
    it('clearInteraction reducer를 실행합니다', () => {
      const state = reducer({
        lactationType: 'PowderedBottleMilk',
        amount: 40,
        recordTime: '2021-12-27T23:36:14.119Z',
      }, clearInteraction());

      expect(state).toEqual({
        ...initialState,
      });
    });
  });
});

describe('interaction functions', () => {
  jest.spyOn(window.localStorage.__proto__, 'setItem');

  beforeEach(() => {
    Storage.prototype.setItem = jest.fn();
  });

  describe('saveLactation', () => {
    it('saveLactation 함수를 실행합니다', () => {
      const mockInteraction: InteractionState = {
        lactationType: 'PowderedBottleMilk',
        amount: 40,
        recordTime: '2021-12-27T23:36:14.119Z',
      };

      const store = mockStore({
        ...mockRootState,
        interaction: {
          ...mockInteraction,
        },
      });
      store.dispatch(saveLactation());

      const actions = store.getActions();

      expect(actions[0]).toEqual(unshiftRecord({ ...mockInteraction }));
      expect(actions[1]).toEqual(clearInteraction());
      expect(localStorage.setItem).toBeCalled();
    });
  });
});
