import React from 'react';
import { render } from '@testing-library/react';

import Footer from 'src/components/common/Footer';

describe('Footer', () => {
  it('Footer를 랜딩합니다', () => {
    const { container } = render(<Footer />);

    expect(container).toHaveTextContent('Red Sea');
  });
});
