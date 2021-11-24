import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice'
import profileReducer from './profileSlice'

const store = configureStore ({
  reducer: {
      notes: noteReducer,
      profile: profileReducer
  }
})

export default store;