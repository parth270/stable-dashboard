import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setLoading } from "../services/Model";

const HomeLayout = ({ children }) => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div className="w-[100%] h-[100vh] overflow-hidden">
      <div
        className="w-[100%] h-[100vh] absolute overflow-hidden "
        style={{
          zIndex: 10,
        }}
      >
        {(location.pathname === "/" ||location.pathname === "/home")  && (
          <img
            src="/front.png"
            className="w-[90px] absolute top-[28px] left-[50px] cursor-pointer"
            style={{
              zIndex: 9999999999,
            }}
            onClick={() => {
              if (location.pathname !== "/") {
                dispatch(setLoading(true));
                setTimeout(() => {
                  router("/");
                  dispatch(setLoading(false));
                }, 1700);
              }
            }}
            alt=""
          />
        )}
        {children}
      </div>
      <div
        className="w-[100%] h-[100vh] absolute bg-[#26353C]"
        style={{
          zIndex: 1,
          backgroundImage: "url('/021.png')",
          backgroundColor: "#fff",
          // backgroundSize: "cover",
        }}
      >
        <div className="w-[100%] h-[100vh] bg-[#26353C]  opacity-0"></div>
      </div>
    </div>
  );
};

export default HomeLayout;
