import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../services/Model";

const Admin = () => {
  const state = useSelector((state) => state.model);
  const dispatch = useDispatch();
  const router = useNavigate();
  return (
    <div className="w-[100%] h-[100vh]">
      <iframe
        onClick={() => {
          dispatch(setLoading(true));
          setTimeout(() => {
            router("/home");
            dispatch(setLoading(false));
          }, 1700);
        }}
        src={state.adminUrl}
        className="w-[100%] h-[100vh]"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Admin;
