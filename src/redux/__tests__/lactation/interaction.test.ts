import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, {
  InteractionReducer,
  setInteraction,
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

  describe('setInteraction', () => {
    it('run setInteraction', () => {
      const state = reducer(initialState, setInteraction({ name: 'amount', value: 20 }));

      expect(state).toEqual({
        ...initialState,
        amount: 20,
      });
    });
  });
});
