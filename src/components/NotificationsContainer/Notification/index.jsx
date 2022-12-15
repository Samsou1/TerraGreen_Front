import { convertTimeStampToDate } from "../../../services/convertTimeStamp";

const Notification = ({ notification }) => {
  return (
    <div className="notification">
      <p>Received on {convertTimeStampToDate(notification.created_at)}</p>
      <p>{notification.content}</p>
    </div>
  );
};

export default Notification;
