import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ACTION_TYPES } from "../../constants/actionTypes";
import s from "./Notification.module.css";

const Template = ({ closePopUp, notificationText }) => {
  useEffect(() => {
    let timerId = setTimeout(closePopUp, 4000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className={s.notification}>
      <span>{notificationText}</span>
      <button onClick={closePopUp}>&times;</button>
    </div>
  );
};

const Notification = ({ isShowPopUp, dispatch, notificationText }) => {
  const closePopUp = () => {
    dispatch({ type: ACTION_TYPES.CLOSE_POPUP });
  };
  const domNode = document.getElementById("notification");
  if (domNode && isShowPopUp) {
    return ReactDOM.createPortal(
      <Template closePopUp={closePopUp} notificationText={notificationText} />,
      domNode
    );
  }
};

export default Notification;
