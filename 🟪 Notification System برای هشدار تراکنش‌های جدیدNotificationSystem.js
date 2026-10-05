import React, { useEffect } from "react";

function NotificationSystem({ newTx }) {
  useEffect(() => {
    if (newTx) {
      if (Notification.permission === "granted") {
        new Notification("New Transaction", {
          body: `Tx ${newTx.id} - ${newTx.amount} APZ`,
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission();
      }
    }
  }, [newTx]);

  return null; // این کامپوننت UI نداره، فقط نوتیفیکیشن می‌فرسته
}

export default NotificationSystem;
