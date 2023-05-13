import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../services/Model";

const Admin = () => {
  const state = useSelector((state) => state.model);
  const dispatch = useDispatch();
  const router = useNavigate();
  const [url, setUrl] = useState(null);
  React.useEffect(() => {
    if (!url) {
      const check = localStorage.getItem("admin");
      console.log(check);
      if (check) {
        setUrl(check);
      } else {
        router("/home");
      }
    }
  });
  return (
    <div
      className="w-[100%] h-[100vh] cursor-pointer"
      onClick={() => {
        dispatch(setLoading(true));
        setTimeout(() => {
          router("/home");
          dispatch(setLoading(false));
        }, 1700);
      }}
    >
      <iframe
        src={url}
        className="w-[100%] h-[100vh]"
        frameborder="0"
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
    </div>
  );
};

export default Admin;
