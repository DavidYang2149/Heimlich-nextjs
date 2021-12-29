import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('헤더를 랜딩합니다', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent(/수유 기록하기/i);
  });
});
