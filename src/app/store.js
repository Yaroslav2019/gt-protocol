import { configureStore } from '@reduxjs/toolkit';

import dealsReducer from './dealsSlice';

export default configureStore({
  reducer: {
    deals: dealsReducer
  },
})
