import React from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../services/Model";
import { useNavigate } from "react-router-dom";

const Right = ({id,color}) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  return (
    <div
      onClick={() => {
        dispatch(setLoading(true));
        setTimeout(() => {
          router(id === 7 ? "/home" : `/walkthrough/${id+1}`);
          dispatch(setLoading(false));
        }, 1700);
      }}
      className="w-[50px] cursor-pointer text-[50px] h-[50px] text-[#fff] font-bold absolute top-[10px] right-[50px]"
      style={{
        color:color,
        zIndex:9999999999,
        top:id===3?"36px":"10px",
        right:id===3?"36px":"36px",
      }}
    >
      {">"}
    </div>
  );
};

export default Right;
