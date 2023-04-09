import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: "",
  reducers: {
    addNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return ''
    }
  },
})

export const { addNotification, removeNotification } = notificationSlice.actions

export const setNotification = (notification, time) => {
  return async dispatch => {
    dispatch(addNotification(notification))
    setTimeout(() => {
      dispatch(removeNotification())
    }, time * 1000)
  }
}

export default notificationSlice.reducer