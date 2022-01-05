import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import reducer, {
  RecordState,
  setRecords,
  unshiftRecord,
  loadRecords,
} from 'src/redux/lactation/record';
import { RootState } from 'src/redux/rootReducer';
import { loadItem } from 'src/utils/storage';
import mockRootState from '__mocks__/fixtures/mockTools';

const middlewares = [thunk];
const mockStore = configureStore<RecordState | RootState, ThunkDispatch<RootState, void, AnyAction>>(middlewares);

jest.mock('src/utils/storage');

describe('record reducers', () => {
  const initialState: RecordState = {
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
    context('localStorage에 records 배열이 있으면', () => {
      it('records 배열로 loadRecords 함수를 실행합니다', () => {
        (loadItem as jest.Mock).mockImplementationOnce(() => {
          return JSON.stringify([
            {
              lactationType: 'PowderedBottleMilk',
              amount: 80,
              recordTime: '2022-01-04T12:34:14.809Z',
            },
          ]);
        });

        const store = mockStore({
          ...mockRootState,
        });
        store.dispatch(loadRecords());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRecords([
          {
            lactationType: 'PowderedBottleMilk',
            amount: 80,
            recordTime: '2022-01-04T12:34:14.809Z',
          },
        ]));
      });
    });

    context('localStorage 값이 없으면', () => {
      it('비어있는 배열로 loadRecords 함수를 실행합니다', () => {
        const store = mockStore({
          ...mockRootState,
        });
        store.dispatch(loadRecords());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRecords([]));
      });
    });
  });
});
