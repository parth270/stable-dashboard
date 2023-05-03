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
        {children}
      </div>
      <div
        className="w-[100%] h-[100vh] absolute"
        style={{
          zIndex: 1,
          backgroundImage: "url('/021.png')",
          backgroundColor: "#fff",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[100%] h-[100vh] bg-[#26353C]  opacity-90"></div>
      </div>
    </div>
  );
};

export default HomeLayout;
