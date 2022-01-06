import React from 'react';
import { render } from '@testing-library/react';

import mockState, { mockUseDispatch, mockUseSelector } from '__mocks__/fixtures/mockTools';
import { RootState } from 'src/redux/rootReducer';

import Home from '../pages/index';

jest.mock('react-redux');

describe('Home', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    dispatch.mockClear();
    mockUseDispatch.mockImplementation(() => dispatch);
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockState,
    }));
  });

  it('헤더를 랜딩합니다', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent(/수유 기록하기/i);
  });

  context('수유 기록이 존재하면', () => {
    it('마지막 수유 시간을 표시합니다', () => {
      mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
        ...mockState,
        record: {
          records: [
            {
              lactationType: 'PowderedBottleMilk',
              amount: 80,
              recordTime: '2022-01-04T12:34:14.809Z',
            },
          ],
        },
      }));

      const { container } = render(<Home />);

      expect(container).toHaveTextContent(/마지막 수유 시간/i);
      expect(container).toHaveTextContent(/2022-01-04 12:34/i);
    });
  });

  context('수유 기록이 존재하지 않으면', () => {
    it('마지막 수유 시간이 표시되지 않습니다', () => {
      const { container } = render(<Home />);

      expect(container).not.toHaveTextContent(/마지막 수유 시간/i);
    });
  });
});
