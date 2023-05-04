import React from "react";
import Left from "./left";
import Right from "./right";

const Item = ({ src }) => {
  return (
    <img className="w-[30%] cursor-pointer object-contain" src={src} alt="" />
  );
};

const Index2 = () => {
  return (
    // <h1 className="text-center text-[#fff] text-[28px]  font-semibold">
    //   How would you like to experience your report?
    // </h1>

    <div
      className="w-[100%] h-[100vh] flex flex-col justify-center   relative   px-[14%]"
      style={{
        zIndex: 1,
        backgroundImage: "url('/got.png')",
        backgroundSize: "cover",
      }}
    >
      <Left id={2} />
      <Right id={2} />
      <h1 className="fckin font-medium text-[#fff] text-[44px] w-[500px]">
        We build together, Every step of the way
      </h1>
      <div
        className="w-[100%] mt-[30px] shrink-0 flex justify-between items-center"
        style={{
          zIndex: 9999,
        }}
      >
        <Item src="/gr-1.png" />
        <Item src="/gr-0.png" />
        <Item src="/gr--1.png" />
      </div>
   
    </div>
  );
};

export default Index2;
