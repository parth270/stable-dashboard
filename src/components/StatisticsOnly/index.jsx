import React from "react";
import Close from "../close";

const StatisticsOnlyContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden">
        <Close />
        <h1 className="text-center text-[#fff] text-[28px] mt-[50px]  font-semibold">
          Statistics Only
        </h1>
      </div>
    </>
  );
};

export default StatisticsOnlyContainer;
