import React from 'react';
import { render } from '@testing-library/react';
import LactationPage from 'pages/lactation/index';

describe('LactationPage', () => {
  it('renders', () => {
    const { container } = render(<LactationPage />);

    expect(container).toHaveTextContent(/수유 일지/i);
  });
});
