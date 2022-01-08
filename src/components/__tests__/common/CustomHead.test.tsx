/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react';
import { render } from '@testing-library/react';

import CustomHead from 'src/components/common/CustomHead';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return (<>{children}</>);
    },
  };
});

describe('CustomHead', () => {
  it('CustomHead를 랜딩합니다', () => {
    render(<CustomHead />, { container: document.head });

    expect(document.title).toBe('heimlich');
  });
});
