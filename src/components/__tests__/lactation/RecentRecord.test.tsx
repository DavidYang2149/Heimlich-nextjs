import React from 'react';
import { render } from '@testing-library/react';

import RecentRecord from 'src/components/lactation/RecentRecord';
import { Lactation } from 'src/types/lactation';

describe('RecentRecord', () => {
  context('가장 최근 수유 기록을 입력하면', () => {
    it('수유 기록을 표시합니다', () => {
      const record: Lactation = {
        lactationType: 'MotherBottleMilk',
        amount: 40,
        recordTime: '2022-01-04T12:34:42.062Z',
      };
      const { container } = render((<RecentRecord record={record} />));

      expect(container).toHaveTextContent('마지막 수유 시간');
    });
  });
});
