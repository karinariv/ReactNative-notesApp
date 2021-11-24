import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    phone: '123456',
    description: 'preloaded state'
  },
  reducers: {
    showInfo: (state, action) => {
      state.phone = action.payload.phone;
      state.description = action.payload.description;
    },
  }
})

export const { showInfo } = profileSlice.actions

export default profileSlice.reducer