import { configureStore } from '@reduxjs/toolkit';

import rootReducer from 'src/redux/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
