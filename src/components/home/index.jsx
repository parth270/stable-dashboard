import React from "react";

const Item = ({ title }) => {
  return (
    <div className=" flex flex-col items-center">
      <div className="w-[80%] h-[115px] bg-[#fff] rounded-2xl"></div>
      <h4 className="text-[18px] text-center font-bold tracking-wide text-[#fff] mt-[9px]">
        {title}
      </h4>
    </div>
  );
};

const HomeContainer = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col pt-[50px] pb-[30px] justify-between items-center">
      <h1 className="text-center text-[#fff] text-[28px]  font-semibold">
        How would you like to experience your report?
      </h1>
      <div className=" h-[530px] w-[530px] grid grid-rows-3 grid-cols-3 gap-x-[30px] gap-y-[20px]">
        <Item title="Ai Query" />
        <Item title="Statistics Only" />
        <Item title="Summarised" />
        <Item title="Narrated" />
        <Item title="Video Driven" />
        <Item title="Avatars" />
        <Item title="Immersive Experience" />
        <Item title="Combination" />
      </div>
    </div>
  );
};

export default HomeContainer;
