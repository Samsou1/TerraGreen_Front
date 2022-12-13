import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { userLoggedIn } from "../../services/user";
import Notification from "./Notification";

const NotificationsContainer = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      await APIManager.getNotifications().then((data) =>
        setNotifications(data)
      );
    };
    fetchNotifications().catch(console.error);
  }, []);

  if (userLoggedIn()) {
    return (
      <div className="notificationsContainer">
        <h3>Notifications</h3>
        {notifications.map((notification, index) => {
          return (
            <Notification
              key={"notification" + index}
              notification={notification}
            />
          );
        })}
      </div>
    );
  } else {
    return <h3>Error, you must be logged in</h3>;
  }
};

export default NotificationsContainer;
