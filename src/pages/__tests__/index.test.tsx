import React from 'react';
import { render } from '@testing-library/react';

import mockState, { mockUseDispatch, mockUseSelector } from '__mocks__/fixtures/mockTools';
import Home from 'src/pages/index';
import { RootState } from 'src/redux/rootReducer';

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
});
