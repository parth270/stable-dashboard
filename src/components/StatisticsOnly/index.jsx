import React from "react";
import Close from "../close";
import GlobeConnectionsExample from "../globe/GlobeConnections";
import useWidth from "../../hooks/useWidth";
import useHeight from "../../hooks/useHeigth";

const StatisticsOnlyContainer = () => {
  const width = useWidth();
  const height = useHeight();
  console.log(width,height);

  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex-col items-center">
        <Close />
        <h1 className="text-center text-[#fff] text-[28px] mt-[50px]  font-semibold">
          Statistics Only
        </h1>
        <GlobeConnectionsExample width={1000} vr={false} height={height-200} />
      </div>
    </>
  );
};

export default StatisticsOnlyContainer;
