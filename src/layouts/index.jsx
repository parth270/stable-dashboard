import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="w-[100%] h-[100vh] overflow-hidden">
      <div
        className="w-[100%] h-[100vh] absolute overflow-hidden"
        style={{
          zIndex: 10,
        }}
      >
        <img src="/front.png" className="w-[90px] absolute top-[28px] left-[50px]" alt="" />
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
