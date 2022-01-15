import React from 'react';
import { render } from '@testing-library/react';

import mockState, { mockUseDispatch, mockUseSelector } from '__mocks__/fixtures/mockTools';
import LactationPage from 'src/pages/lactation/index';
import { RootState } from 'src/redux/rootReducer';

jest.mock('react-redux');

describe('LactationPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    dispatch.mockClear();
    mockUseDispatch.mockImplementation(() => dispatch);
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockState,
    }));
  });

  it('페이지를 랜딩합니다', () => {
    const { container } = render(<LactationPage />);

    expect(container).toHaveTextContent(/수유 일지/i);
  });
});
