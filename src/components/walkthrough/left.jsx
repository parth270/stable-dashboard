import React from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../services/Model";
import { useNavigate } from "react-router-dom";

const Left = ({ id, color }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  return (
    <div
      className="w-[50px] cursor-pointer h-[50px] text-[#fff] text-[50px] font-bold absolute top-[10px] left-[50px]"
      onClick={() => {
        dispatch(setLoading(true));
        setTimeout(() => {
          router(id === 1 ? "/" : `/walkthrough/${id - 1}`);
          dispatch(setLoading(false));
        }, 1700);
      }}
      style={{
        color: color,
        top: id === 3 ? "36px" : "10px",
        left: id === 3 ? "36px" : "36px",
      }}
    >
      {"<"}
    </div>
  );
};

export default Left;
