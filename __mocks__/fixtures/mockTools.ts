import { useDispatch, useSelector } from 'react-redux';

import { RootReducer } from 'src/redux/rootReducer';

const mockRootReducer: RootReducer = {
  interaction: {
    lactationType: 'breastMilk',
    amount: 0,
    recordTime: '',
  },
  record: {
    records: [],
  },
};

export const mockUseDispatch = useDispatch as jest.Mock;
export const mockUseSelector = useSelector as jest.Mock;

export default mockRootReducer;
