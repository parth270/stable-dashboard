import React from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../services/Model";
import { useNavigate } from "react-router-dom";

const Left = ({ id, color }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  return (
    <div
      className="w-[50px] cursor-pointer h-[50px] text-[#fff] text-[50px] font-bold absolute top-[10px] right-[100px]"
      onClick={() => {
        dispatch(setLoading(true));
        setTimeout(() => {
          router(
            id === 1 ? "/intro" : id === 4 ?`/home`:`/walkthrough/${id - 1}`
          );
          dispatch(setLoading(false));
        }, 1700);
      }}
      style={{
        color: color,
        zIndex:9999999999,
        top: id === 3 ? "36px" : "10px",
      }}
    >
      {"<"}
    </div>
  );
};

export default Left;
