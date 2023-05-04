import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../services/Model";

const Close = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="cursor-pointer w-[20px] h-[20px] absolute top-[30px] left-[40px]"
      style={{
        zIndex:10000000
      }}
      onClick={() => {
        dispatch(setLoading(true));
        setTimeout(() => {
          router("/home");
          dispatch(setLoading(false));
        }, 1700);
      }}
    >
      <img src="/Cross.svg" className="w-full " alt="" />
    </div>
  );
};

export default Close;
