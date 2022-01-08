import React from 'react';
import { Lactation } from 'src/types/lactation';

export interface Props {
  record: Lactation;
}

const RecentRecord = ({ record }: Props) => {
  const { recordTime } = record;
  const showDate = recordTime.replace('T', ' ').substring(0, 16);

  return (
    <h2>
      마지막 수유 시간:
      {' '}
      {showDate}
    </h2>
  );
};

export default RecentRecord;
