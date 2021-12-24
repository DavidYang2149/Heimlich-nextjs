import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, {
  InteractionReducer,
  setLactationType,
  setAmount,
} from 'src/redux/lactation/interaction';
import { RootReducer } from 'src/redux/rootReducer';
// import mockRootReducer from '__mocks__/fixtures/mockTools';

const middlewares = [thunk];
const mockStore = configureStore<InteractionReducer | RootReducer, ThunkDispatch<RootReducer, void, AnyAction>>(middlewares);

describe('interaction reducer', () => {
  const initialState: InteractionReducer = {
    lactationType: 'breastMilk',
    amount: 0,
    recordTime: '',
  };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setLactationType', () => {
    it('setLactationType 함수를 실행합니다 ', () => {
      const state = reducer(initialState, setLactationType('PowderedBottleMilk'));

      expect(state).toEqual({
        ...initialState,
        lactationType: 'PowderedBottleMilk',
      });
    });
  });

  describe('setAmount', () => {
    it('setAmount 함수를 실행합니다', () => {
      const state = reducer(initialState, setAmount(20));

      expect(state).toEqual({
        ...initialState,
        amount: 20,
      });
    });
  });
});
