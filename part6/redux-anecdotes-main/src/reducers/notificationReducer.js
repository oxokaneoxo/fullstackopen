import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action) => {
      console.log('action', action)
      state.message = action.payload
    },
  },
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer