import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent(/수유 기록하기/i);
  });
});
