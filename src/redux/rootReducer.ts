import { combineReducers } from '@reduxjs/toolkit';

import interactionReducer from 'src/redux/lactation/interaction';
import recordReducer from 'src/redux/lactation/record';

const rootReducer = combineReducers({
  interaction: interactionReducer,
  record: recordReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
