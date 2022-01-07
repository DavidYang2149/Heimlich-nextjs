import React from 'react';
import { render } from '@testing-library/react';

import mockState, { mockUseSelector } from '__mocks__/fixtures/mockTools';
import MainContainer from 'src/containers/lactation/MainContainer';
import { RootState } from 'src/redux/rootReducer';

jest.mock('react-redux');

describe('MainContainer', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockState,
    }));
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

      const { container } = render(<MainContainer />);

      expect(container).toHaveTextContent(/마지막 수유 시간/i);
      expect(container).toHaveTextContent(/2022-01-04 12:34/i);
    });
  });

  context('수유 기록이 존재하지 않으면', () => {
    it('마지막 수유 시간이 표시되지 않습니다', () => {
      const { container } = render(<MainContainer />);

      expect(container).not.toHaveTextContent(/마지막 수유 시간/i);
    });
  });
});
