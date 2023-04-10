import { useNotificationValue } from "../NotificatonContext";

const Notification = () => {
  const { message } = useNotificationValue();

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  if (message === null || message === undefined) return null;

  return (
    <div style={style}>
      {message}
    </div>
  )
};

export default Notification;