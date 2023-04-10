import { createContext, useContext, useReducer } from "react"

const initialState = { message: null }

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { message: action.payload }
    case "REMOVE":
      return initialState
    default:
      return state
  }
};

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, initialState)

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext);
  return notificationAndDispatch[0]
};

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext);
  return notificationAndDispatch[1]
};

export default NotificationContext;