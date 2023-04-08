import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Test',
  reducers: {
    setNotification: (state, action) => {
      console.log('action', action)
    },
  },
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer