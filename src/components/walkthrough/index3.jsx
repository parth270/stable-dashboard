import React from "react";
import Left from "./left";
import Right from "./right";

const Item = ({ src, title }) => {
  return (
    <div className="w-[250px] rounded-lg h-[190px] flex flex-col mr-[40px] px-[20px] py-[30px] bg-[#0f0f0f] ">
      <img className="w-[70px] object-contain" src={src} alt="" />
      <h3 className="good-font text-[17px] font-medium text-[#fff] mt-auto tracking-wide">
        {title}
      </h3>
    </div>
  );
};

const Index2 = () => {
  return (
    // <h1 className="text-center text-[#fff] text-[28px]  font-semibold">
    //   How would you like to experience your report?
    // </h1>

    <div className="w-[100%] h-[100vh] flex flex-col justify-center   relative   px-[7%]">
      <div
        className="w-[100%] h-[160px] bg-[#fff] flex items-center pl-[7%] absolute top-0 left-0"
        style={{
          zIndex: 1000000,
        }}
      >
        <Left id={3} color={"#000"} />
        <Right id={3} color={"#000"} />
        <img src="/nav-logo.png" className="w-[200px] object-contain" alt="" />
      </div>
      <h1 className="good-font font-medium text-[#fff] text-[44px] w-[500px]">
        Solutions
      </h1>
      <div
        className="w-[100%] mt-[30px] shrink-0 flex sitems-center"
        style={{
          zIndex: 999999999,
        }}
      >
        <Item src="/ar-2.png" route="" title="On Chain Publishing" />
        <Item src="/ar-3.png" route="" title="Immersive Experiences" />
        <Item src="/ar-1.png" route="" title="PR & Communities" />
      </div>
      <img
        src="/got.png"
        className="w-[1500px] h-[1500px] absolute bottom-[-770px] right-[-210px] object-contain"
        alt=""
        style={{
          zIndex: 99,
        }}
      />
    </div>
  );
};

export default Index2;
