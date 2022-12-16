import { Link } from "react-router-dom";
import { convertTimeStampToDate } from "../../../services/convertTimeStamp";

const Notification = ({ notification }) => {

  if(notification.project_id){
    return (
      <div className="notification">
        <p>Received on {convertTimeStampToDate(notification.created_at)}</p>
        <p>{notification.content}</p>
        <Link to={`/projects/${notification.project_id}`}>Click here</Link>
      </div>
    );
  }
  return (
    <div className="notification">
      <p>Received on {convertTimeStampToDate(notification.created_at)}</p>
      <p>{notification.content}</p>
    </div>
  );
};

export default Notification;
